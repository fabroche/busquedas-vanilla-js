/*
* Exercise Finding Substring Indices
*
* Guiven an array of strings and a
* target string, write a function to
* determine if the target string is
* present in the array. If it is
* present, return the index of the first
* occurrence and the index of
* the last occurrence; otherwise,
* return -1.
*
* */

function main() {

    const stringArray = ['appel', 'banana', 'orenge', 'grape', 'banana', 'kiwi']
    const target = 'banana'

    console.log('Array: ', stringArray)
    console.log('Target: ', target)

    const result = findStringIndexInArray(stringArray, target)


    function findStringIndexInArray(stringArray, target) {

        const result = {
            includesTargetString: false,
            firstOcurrentIndex: -1,
            lastOccurrenceIndex: -1
        }

        stringArray.forEach((string, index) => {

            if (string.includes(target)) {
                result.includesTargetString = true

                result.firstOcurrentIndex = stringArray.indexOf(target)

                result.lastOccurrenceIndex = stringArray.lastIndexOf(target)
            }

        })

        console.log('Result: ', result)
        return result

    }
}

document.addEventListener('DOMContentLoaded', main)