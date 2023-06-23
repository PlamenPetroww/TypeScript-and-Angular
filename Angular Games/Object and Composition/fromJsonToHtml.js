function solve(input) {

    let parsed = JSON.parse(input);
    let columnNames = Object.keys(parsed[0]);
    let values = parsed.map(obj => Object.values(obj));
    let result = '<table>\n';

    appendHeaders(columnNames);
    appendValues(values);

    result += '</table>'

    function appendHeaders(columnNames) {
        result += '   <tr>';

        for (let columnName of columnNames) {
            result += `<th>${columnName}</th>`
        }

        result += `</tr>\n`
    }

    function appendValues(values) {

        for (let value of values) {
            result += '   <tr>';
            result += `<td>${espace(value[0])}</td><td>${espace(value[1])}</td>`
            result += `</tr>\n`;
        }

    }

    function espace(value) {
        return value.toString().replace('<', '&lt;').replace('>', '&gt;')
    }

    console.log(result)

}

solve(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`)