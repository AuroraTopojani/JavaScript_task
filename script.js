const fs = require('fs');
const events = require('events');
const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const detectTheAnagrams = async (inputword) => {

    try {
        let list = [];
        const fileRl = readline.createInterface({
            input: fs.createReadStream('./dictionary.txt'),
            crlfDelay: Infinity
        });

        const areAnagrams = (a, b) => {
            if (a.length !== b.length)
            {
                return false;
            }
            const aArray = a.toLowerCase().split('').sort().join('');
            const bArray = b.toLowerCase().split('').sort().join('');
            return aArray === bArray;
        };
        
        fileRl.on('line', (line) => {
            if (areAnagrams(inputword, line)) 
            {
                list.push(line);
            }
        });

        await events.once(fileRl, 'close');
        console.time('Time');
        if (list.length > 0) 
        {
            console.log(`For the word ${inputword} are found ${list.length} anagrams`);
            console.log(list.join(' '));
        } 
        else
        {
            console.log(`No anagrams found `);
        }

        console.timeEnd('Time'); 

    }
        catch (err) {
        console.error(err);
    }
};

const askInput = (question, callback) => {
    rl.question(question, (answer) => {
        callback(answer);
    });
};

askInput('\nFind the Anagrams: ', detectTheAnagrams);
