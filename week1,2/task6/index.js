// Телефонная книга
/** В этом задании необходимо реализовать функцию,
 * через которую можно управлять телефонной книгой.

 * Для управления телефонной книгой нужно реализовать три команды:

 * ADD — добавляет контакт
 * REMOVE_PHONE — удаляет номер
 * SHOW — возвращает содержимое телефонной книги
 * var phoneBook = {};
 *
 * Команда ADD
 * Добавляет контакт в телефонную книгу со списком телефонов. Телефоны 
 * перечисляются через запятую. Если такой контакт существует, то команда 
 * пополняет список телефонов контакта.
 * ADD Name phone1,phone2
 *
 * Команда REMOVE_PHONE
 * Удаляет телефон из телефонной книги. Если телефон успешно удалён, то функция
 * должна вернуть true. Если такого телефона в телефонной книге не существует, 
 * то возвращается false.
 * REMOVE_PHONE phone1
 * 
 * Команда SHOW
 * Возвращает массив контактов с их телефонами. Массив содержит строчки вида:
 * "Имя: Телефон1, Телефон2". Массив должен быть отсортирован по имени контакта.
 * Телефоны идут в порядке добавления их в телефонную книгу. Контакт с пустым 
 * списком телефонов не должен возвращаться.
 * В этой задаче удобно разбить операции над телефонной книгой на отдельные 
 * функции. Их следует вызывать для конкретной операции. При использовании 
 * такой декомпозиции важно не забыть вернуть результат выполнения функции. 
 * Иначе основная функция будет возвращать undefined.
/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
let dir = {};
module.exports = function (command) {
    let c = command;
    let operator = c.slice(0, c.indexOf(" ")+1).trim() || c;
    let attrs = c.split(" ");
    switch(operator) {
        case 'ADD':
            let name = attrs[1];
            attrs[2].split(',').forEach((item) => {
                if (typeof dir[name] == 'undefined') {
                    dir[name] = [item];
                } else {
                    dir[name].push(item);
                }
            });
            return true;
        
        case 'REMOVE_PHONE':
            let deletingPhone = attrs[1];
            for (let item in dir) {
                let index = dir[item].indexOf(deletingPhone);
                if (index >= 0) {
                    dir[item].splice(index, 1);
                    if (dir[item].length == 0) delete dir[item];
                    return true;
                }
            }
            return false;
        
        case 'SHOW':
            let res = [];
            for (item in dir) {
                res.push(`${item}: ${dir[item].join(', ')}`);
            }
            return res.sort();
    }
}
