import React, { useState } from "react";
import "../../styles/challenge-style/cp.css";
import "../../styles/challenge-style/topicDetails.css";

const AlgorithmChallenge3 = () => {
  const [Page, setPage] = useState("");
  const handleClick = (param) => {
    setPage(param);
  };
  return (
    <>
      <div className="cp-topic-details">
        <div className="details">
          <button
            onClick={() => {
              if (Page === "Day 1") setPage("");
              else handleClick("Day 1");
            }}
          >
            Day 1
          </button>
          {Page === "Day 1" && (
            <div>
              <h3>Linear Search:</h3>
              <p>
                Linear Search, also known as sequential search, is a basic
                searching algorithm used to find a specific target element in a
                collection (such as an array or a list). It works by
                sequentially checking each element in the collection until the
                target element is found or the end of the collection is reached.
              </p>
              <p>Here's a brief explanation of the linear search algorithm:</p>

              <ul>
                <li>
                  Start at the beginning of the collection (usually at index 0).
                </li>
                <li>Compare the current element with the target element.</li>
                <li>
                  If the current element matches the target element, the search
                  is successful, and the algorithm returns the index of the
                  element.
                </li>
                <li>
                  If the current element doesn't match the target element, move
                  to the next element in the collection.
                </li>
                <li>
                  Repeat steps 2-4 until either the target element is found, or
                  the end of the collection is reached.
                </li>
                <li>
                  If the end of the collection is reached without finding the
                  target element, the search is considered unsuccessful, and the
                  algorithm returns a special value (e.g., -1) to indicate that
                  the element was not found.
                </li>
              </ul>

              <p>
                Linear Search has a time complexity of O(n), where n is the
                number of elements in the collection. In the worst-case
                scenario, the target element may be located at the end of the
                collection, requiring the algorithm to iterate through all the
                elements.
              </p>

              <p>
                Linear Search is a simple and straightforward algorithm.
                However, it is not efficient for large collections, as it needs
                to examine each element one by one. For larger datasets, more
                advanced search algorithms such as binary search or hash-based
                searching techniques are preferred.
              </p>

              <h3>To know more you can visit following sites :</h3>
              <div className="outsite">
                <p>Blog Links :</p>
                <a
                  href="https://www.programiz.com/dsa/linear-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.programiz.com/dsa/linear-search
                </a>
                <a
                  href="https://www.geeksforgeeks.org/linear-search/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.geeksforgeeks.org/linear-search/
                </a>

                <p>Video Links :</p>
                <a
                  href="https://www.youtube.com/watch?v=13ocRMSJy5M"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=13ocRMSJy5M
                </a>
                <a
                  href="https://www.youtube.com/watch?v=EqWpRlZkWNM"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=EqWpRlZkWNM
                </a>

                <p>Problem and Solution Links :</p>
                <ul>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {/* </div> */}
          <button
            onClick={() => {
              if (Page === "Day 2") setPage("");
              else handleClick("Day 2");
            }}
          >
            Day 2
          </button>
          {Page === "Day 2" && (
            <div>
              <h3>Binary Search:</h3>
              <p>
                Binary search is a commonly used search algorithm for finding a
                specific element in a sorted array or list. It follows a
                divide-and-conquer approach to quickly locate the target value
                by repeatedly dividing the search space in half.
              </p>
              <p>Here's how binary search works:</p>

              <ul>
                <li>Begin with a sorted array or list.</li>
                <li>
                  Set the lower bound (left) and upper bound (right) of the
                  search range to the first and last indices of the array,
                  respectively.
                </li>
                <li>Calculate the middle index as (left + right) / 2.</li>
                <li>
                  Compare the middle element with the target value:
                  <li>
                    If the middle element is equal to the target value, the
                    search is complete, and the index is returned.
                  </li>
                  <li>
                    If the middle element is greater than the target value,
                    update the upper bound (right) to the middle index - 1 and
                    go to step 3.
                  </li>
                  <li>
                    If the middle element is less than the target value, update
                    the lower bound (left) to the middle index + 1 and go to
                    step 3.
                  </li>
                </li>
                <li>
                  Repeat steps 3 and 4 until the target value is found or the
                  search range is empty (left ${">"} right). In the latter case,
                  the target value is not present in the array.
                </li>
              </ul>

              <p>
                Binary search has a time complexity of O(log n) since it halves
                the search space at each iteration. This makes it significantly
                more efficient than linear search, especially for large arrays.
              </p>

              <h3>To know more you can visit following sites :</h3>
              <div className="outsite">
                <p>Blog Links :</p>
                <a
                  href="https://www.programiz.com/dsa/binary-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.programiz.com/dsa/binary-search
                </a>
                <a
                  href="https://www.geeksforgeeks.org/binary-search/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.geeksforgeeks.org/binary-search/
                </a>

                <p>Video Links :</p>
                <a
                  href="https://www.youtube.com/watch?v=13ocRMSJy5M"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=13ocRMSJy5M
                </a>
                <a
                  href="https://www.youtube.com/watch?v=ApvI7QUqGzI"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=ApvI7QUqGzI
                </a>

                <p>Problem and Solution Links :</p>
                <ul>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <button
            onClick={() => {
              if (Page === "Day 3") setPage("");
              else handleClick("Day 3");
            }}
          >
            Day 3
          </button>
          {Page === "Day 3" && (
            <div>
              <h3>Hashing :</h3>
              <p>
                Hashing is a technique used to quickly locate data within a
                collection, such as an array or a hash table, based on a key or
                search value. It involves applying a hash function to the key,
                which converts it into an index or location within the data
                structure.
              </p>
              <p>Here's a brief explanation of how hashing works:</p>

              <ul>
                <li>
                  Hash Function: A hash function takes an input (the key) and
                  computes a numerical value (the hash code or hash value). The
                  hash function should generate a unique hash value for each
                  unique key, but collisions (different keys producing the same
                  hash value) are possible.
                </li>
                <li>
                  Hash Table: A hash table is a data structure that uses an
                  array to store key-value pairs. The array is typically larger
                  than the number of elements to be stored, allowing for
                  efficient storage and retrieval. Each element in the array is
                  called a bucket or slot.
                </li>
                <li>
                  Mapping: The hash code is used to map the key to a specific
                  index or bucket in the array. The hash code is often reduced
                  to fit within the array size using a technique called modulo
                  arithmetic. For example, if the array has 10 slots, the hash
                  code might be reduced to a value between 0 and 9.
                </li>
                <li>
                  Handling Collisions: Since multiple keys can produce the same
                  hash value (collisions), collision resolution techniques are
                  employed to handle these cases. Common techniques include
                  separate chaining (each slot contains a linked list of
                  key-value pairs) or open addressing (finding an alternative
                  slot if a collision occurs).
                </li>
                <li>
                  Retrieval: When searching for a key, the hash function is
                  applied to compute the hash code, and the resulting index is
                  checked. If the key is found at that index, the corresponding
                  value can be retrieved. In case of collisions, the appropriate
                  collision resolution method is used to locate the desired
                  key-value pair.
                </li>
              </ul>

              <p>
                Hashing provides efficient search and retrieval operations when
                the keys are well-distributed and collisions are minimized. It
                is widely used in data structures like dictionaries, databases,
                caches, and cryptographic systems. Hashing allows for
                constant-time average case complexity for searching, making it a
                valuable technique for fast data access.
              </p>

              <h3>To know more you can visit following sites :</h3>
              <div className="outsite">
                <p>Blog Links :</p>
                <a
                  href="https://www.programiz.com/dsa/binary-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.programiz.com/dsa/binary-search
                </a>
                <a
                  href="https://www.geeksforgeeks.org/binary-search/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.geeksforgeeks.org/binary-search/
                </a>

                <p>Video Links :</p>
                <a
                  href="https://www.youtube.com/watch?v=13ocRMSJy5M"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=13ocRMSJy5M
                </a>
                <a
                  href="https://www.youtube.com/watch?v=ApvI7QUqGzI"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=ApvI7QUqGzI
                </a>

                <p>Problem and Solution Links :</p>
                <ul>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <button
            onClick={() => {
              if (Page === "Day 4") setPage("");
              else handleClick("Day 4");
            }}
          >
            Day 4
          </button>
          {Page === "Day 4" && (
            <div>
              <h3>Linear Search:</h3>
              <p>
                Linear Search, also known as sequential search, is a basic
                searching algorithm used to find a specific target element in a
                collection (such as an array or a list). It works by
                sequentially checking each element in the collection until the
                target element is found or the end of the collection is reached.
              </p>
              <p>Here's a brief explanation of the linear search algorithm:</p>

              <ul>
                <li>
                  Start at the beginning of the collection (usually at index 0).
                </li>
                <li>Compare the current element with the target element.</li>
                <li>
                  If the current element matches the target element, the search
                  is successful, and the algorithm returns the index of the
                  element.
                </li>
                <li>
                  If the current element doesn't match the target element, move
                  to the next element in the collection.
                </li>
                <li>
                  Repeat steps 2-4 until either the target element is found, or
                  the end of the collection is reached.
                </li>
                <li>
                  If the end of the collection is reached without finding the
                  target element, the search is considered unsuccessful, and the
                  algorithm returns a special value (e.g., -1) to indicate that
                  the element was not found.
                </li>
              </ul>

              <p>
                Linear Search has a time complexity of O(n), where n is the
                number of elements in the collection. In the worst-case
                scenario, the target element may be located at the end of the
                collection, requiring the algorithm to iterate through all the
                elements.
              </p>

              <p>
                Linear Search is a simple and straightforward algorithm.
                However, it is not efficient for large collections, as it needs
                to examine each element one by one. For larger datasets, more
                advanced search algorithms such as binary search or hash-based
                searching techniques are preferred.
              </p>

              <h3>To know more you can visit following sites :</h3>
              <div className="outsite">
                <p>Blog Links :</p>
                <a
                  href="https://www.programiz.com/dsa/linear-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.programiz.com/dsa/linear-search
                </a>
                <a
                  href="https://www.geeksforgeeks.org/linear-search/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.geeksforgeeks.org/linear-search/
                </a>

                <p>Video Links :</p>
                <a
                  href="https://www.youtube.com/watch?v=13ocRMSJy5M"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=13ocRMSJy5M
                </a>
                <a
                  href="https://www.youtube.com/watch?v=EqWpRlZkWNM"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=EqWpRlZkWNM
                </a>

                <p>Problem and Solution Links :</p>
                <ul>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {/* </div> */}
          <button
            onClick={() => {
              if (Page === "Day 5") setPage("");
              else handleClick("Day 5");
            }}
          >
            Day 5
          </button>
          {Page === "Day 5" && (
            <div>
              <h3>Binary Search:</h3>
              <p>
                Binary search is a commonly used search algorithm for finding a
                specific element in a sorted array or list. It follows a
                divide-and-conquer approach to quickly locate the target value
                by repeatedly dividing the search space in half.
              </p>
              <p>Here's how binary search works:</p>

              <ul>
                <li>Begin with a sorted array or list.</li>
                <li>
                  Set the lower bound (left) and upper bound (right) of the
                  search range to the first and last indices of the array,
                  respectively.
                </li>
                <li>Calculate the middle index as (left + right) / 2.</li>
                <li>
                  Compare the middle element with the target value:
                  <li>
                    If the middle element is equal to the target value, the
                    search is complete, and the index is returned.
                  </li>
                  <li>
                    If the middle element is greater than the target value,
                    update the upper bound (right) to the middle index - 1 and
                    go to step 3.
                  </li>
                  <li>
                    If the middle element is less than the target value, update
                    the lower bound (left) to the middle index + 1 and go to
                    step 3.
                  </li>
                </li>
                <li>
                  Repeat steps 3 and 4 until the target value is found or the
                  search range is empty (left ${">"} right). In the latter case,
                  the target value is not present in the array.
                </li>
              </ul>

              <p>
                Binary search has a time complexity of O(log n) since it halves
                the search space at each iteration. This makes it significantly
                more efficient than linear search, especially for large arrays.
              </p>

              <h3>To know more you can visit following sites :</h3>
              <div className="outsite">
                <p>Blog Links :</p>
                <a
                  href="https://www.programiz.com/dsa/binary-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.programiz.com/dsa/binary-search
                </a>
                <a
                  href="https://www.geeksforgeeks.org/binary-search/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.geeksforgeeks.org/binary-search/
                </a>

                <p>Video Links :</p>
                <a
                  href="https://www.youtube.com/watch?v=13ocRMSJy5M"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=13ocRMSJy5M
                </a>
                <a
                  href="https://www.youtube.com/watch?v=ApvI7QUqGzI"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=ApvI7QUqGzI
                </a>

                <p>Problem and Solution Links :</p>
                <ul>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <button
            onClick={() => {
              if (Page === "Day 6") setPage("");
              else handleClick("Day 6");
            }}
          >
            Day 6
          </button>
          {Page === "Day 6" && (
            <div>
              <h3>Hashing :</h3>
              <p>
                Hashing is a technique used to quickly locate data within a
                collection, such as an array or a hash table, based on a key or
                search value. It involves applying a hash function to the key,
                which converts it into an index or location within the data
                structure.
              </p>
              <p>Here's a brief explanation of how hashing works:</p>

              <ul>
                <li>
                  Hash Function: A hash function takes an input (the key) and
                  computes a numerical value (the hash code or hash value). The
                  hash function should generate a unique hash value for each
                  unique key, but collisions (different keys producing the same
                  hash value) are possible.
                </li>
                <li>
                  Hash Table: A hash table is a data structure that uses an
                  array to store key-value pairs. The array is typically larger
                  than the number of elements to be stored, allowing for
                  efficient storage and retrieval. Each element in the array is
                  called a bucket or slot.
                </li>
                <li>
                  Mapping: The hash code is used to map the key to a specific
                  index or bucket in the array. The hash code is often reduced
                  to fit within the array size using a technique called modulo
                  arithmetic. For example, if the array has 10 slots, the hash
                  code might be reduced to a value between 0 and 9.
                </li>
                <li>
                  Handling Collisions: Since multiple keys can produce the same
                  hash value (collisions), collision resolution techniques are
                  employed to handle these cases. Common techniques include
                  separate chaining (each slot contains a linked list of
                  key-value pairs) or open addressing (finding an alternative
                  slot if a collision occurs).
                </li>
                <li>
                  Retrieval: When searching for a key, the hash function is
                  applied to compute the hash code, and the resulting index is
                  checked. If the key is found at that index, the corresponding
                  value can be retrieved. In case of collisions, the appropriate
                  collision resolution method is used to locate the desired
                  key-value pair.
                </li>
              </ul>

              <p>
                Hashing provides efficient search and retrieval operations when
                the keys are well-distributed and collisions are minimized. It
                is widely used in data structures like dictionaries, databases,
                caches, and cryptographic systems. Hashing allows for
                constant-time average case complexity for searching, making it a
                valuable technique for fast data access.
              </p>

              <h3>To know more you can visit following sites :</h3>
              <div className="outsite">
                <p>Blog Links :</p>
                <a
                  href="https://www.programiz.com/dsa/binary-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.programiz.com/dsa/binary-search
                </a>
                <a
                  href="https://www.geeksforgeeks.org/binary-search/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.geeksforgeeks.org/binary-search/
                </a>

                <p>Video Links :</p>
                <a
                  href="https://www.youtube.com/watch?v=13ocRMSJy5M"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=13ocRMSJy5M
                </a>
                <a
                  href="https://www.youtube.com/watch?v=ApvI7QUqGzI"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=ApvI7QUqGzI
                </a>

                <p>Problem and Solution Links :</p>
                <ul>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <button
            onClick={() => {
              if (Page === "Day 7") setPage("");
              else handleClick("Day 7");
            }}
          >
            Day 7
          </button>
          {Page === "Day 7" && (
            <div>
              <h3>Hashing :</h3>
              <p>
                Hashing is a technique used to quickly locate data within a
                collection, such as an array or a hash table, based on a key or
                search value. It involves applying a hash function to the key,
                which converts it into an index or location within the data
                structure.
              </p>
              <p>Here's a brief explanation of how hashing works:</p>

              <ul>
                <li>
                  Hash Function: A hash function takes an input (the key) and
                  computes a numerical value (the hash code or hash value). The
                  hash function should generate a unique hash value for each
                  unique key, but collisions (different keys producing the same
                  hash value) are possible.
                </li>
                <li>
                  Hash Table: A hash table is a data structure that uses an
                  array to store key-value pairs. The array is typically larger
                  than the number of elements to be stored, allowing for
                  efficient storage and retrieval. Each element in the array is
                  called a bucket or slot.
                </li>
                <li>
                  Mapping: The hash code is used to map the key to a specific
                  index or bucket in the array. The hash code is often reduced
                  to fit within the array size using a technique called modulo
                  arithmetic. For example, if the array has 10 slots, the hash
                  code might be reduced to a value between 0 and 9.
                </li>
                <li>
                  Handling Collisions: Since multiple keys can produce the same
                  hash value (collisions), collision resolution techniques are
                  employed to handle these cases. Common techniques include
                  separate chaining (each slot contains a linked list of
                  key-value pairs) or open addressing (finding an alternative
                  slot if a collision occurs).
                </li>
                <li>
                  Retrieval: When searching for a key, the hash function is
                  applied to compute the hash code, and the resulting index is
                  checked. If the key is found at that index, the corresponding
                  value can be retrieved. In case of collisions, the appropriate
                  collision resolution method is used to locate the desired
                  key-value pair.
                </li>
              </ul>

              <p>
                Hashing provides efficient search and retrieval operations when
                the keys are well-distributed and collisions are minimized. It
                is widely used in data structures like dictionaries, databases,
                caches, and cryptographic systems. Hashing allows for
                constant-time average case complexity for searching, making it a
                valuable technique for fast data access.
              </p>

              <h3>To know more you can visit following sites :</h3>
              <div className="outsite">
                <p>Blog Links :</p>
                <a
                  href="https://www.programiz.com/dsa/binary-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.programiz.com/dsa/binary-search
                </a>
                <a
                  href="https://www.geeksforgeeks.org/binary-search/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.geeksforgeeks.org/binary-search/
                </a>

                <p>Video Links :</p>
                <a
                  href="https://www.youtube.com/watch?v=13ocRMSJy5M"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=13ocRMSJy5M
                </a>
                <a
                  href="https://www.youtube.com/watch?v=ApvI7QUqGzI"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/watch?v=ApvI7QUqGzI
                </a>

                <p>Problem and Solution Links :</p>
                <ul>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Problem Link :{" "}
                      <a
                        href="https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/adjacent-sum-greater-than-k-f41e3ec4/
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AlgorithmChallenge3;
