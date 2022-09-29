# JavaScript Task
## Find the anagrams
A JavaScript console application in which the algorithm finds all anagrams found in the provided dictionary file, based on the input of the user.

## Complexity of the solution

* First the script will start to read the dictionary file line by line, and it will check any words with the same length as the input word. All of the found words with the same length will then be split into letters. A sorted array is created with the letters of the loaded words and then joined. They then will be compared with the input word. If any of them pass the criteria, they will be added to the list of anagrams.
* The split and join methods have O(n) time complexity but array sort uses merge sort so its time complexity is O(nlog(n)), which means the big O of the algorithm is O(nlog(n)). I think its acceptable, stable and memory efficient too.