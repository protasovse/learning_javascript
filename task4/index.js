/**
 * В этом задании необходимо вернуть список хештегов, которые содержатся в твите.
 *
 * Условия
 * 
 * Строка содержит только буквы русского и латинского алфавита, знак решетки и пробелы.
 * Гарантируется, что в функцию передается непустая строка.
 * Слова в строке разделены одним пробелом.
 * Хештег начинается со знака решетки (#) и состоит из одного слова.
 * В результирующем массиве хештеги должны быть без решетки.
 * Если в слове хештегов нет, то возвращается пустой массив.
 * 
 * Подсказка
 * 
 * Для выполнения этого задания может понадобиться метод строки split.

 * Важно. В рамках курса мы следуем стандарту языка EcmaScript 5. 
 * Подробнее о EcmaScript вы можете узнать в википедии.
**/
/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let s = tweet.split("#");
    let h = []
    s.forEach(s=>{h.push(s.slice(0, (s.indexOf(' ')+1||s.length+1)-1))});
    return h.slice(1);
};
