---
layout: post
title: Bloom Filters
date: 2025-12-02 14:24:00
description: exploring one of my favorite data structures 
tags: computer-science
categories: academic
featured: true
---

When making a new Google account, you type in an account name and the website *almost instantly*  tells you whether this account name is taken or not. But how is it so fast? A simple search would take O(N) time, iterating through all the entries. Assuming they store the names in an alphabetic order, it would still take O(log N) time. But even logarithmic-time lookups can become costly at massive scale, requiring more memory-efficient approaches. **So how does it work so fast?**

Presenting a wonderful probabilistic data structure - **Bloom Filters** - combining the speed and simplicity of hash functions to quickly search a dataset and give a *confident NO*  and a *maybe YES*. In essence, it uses multiple hash functions - let it be **k** in this case - and for each entry in the dataset, it is hashed by all k of these functions. When checking if an entry **E** is present in the dataset, E gets hashed by all k functions and then checked in the array if a similar hashing pattern was seen previously.

**Data structure setup (intuition)** - we can think of k bit arrays, one for each hash function. Initialize it will all zeros and set an index **i** equal to 1 if f(d) = i for some d, i.e. if the output of the hash function for some data point is i then set its value to 1 in the array. Repeat similarly for all k functions. 

**Real life setup** - a Bloom filter comprises of a bit array (an array with each entry being a bit - 0 or 1) initialized with all 0. The size of this array should be big enough such that for our chosen number of hash functions we have rare collisions. When placing an item, i, in the filter, compute *f(i)*  for each hash function *f*  and then set the bit at that index to be 1. 

**Membership checking** - to check a new entry, E, we compute *f(E)*  for each hash function and check the bits at the corresponding indices in the bit array. 
- If the array stores 1 at all the above indices, then E *might*  be present in the dataset. A positive result could just be a coincidence that a past data point seems to give the same output for each hash function and that's why a YES by our data structure is a **probable YES**. Maybe we saw E in the past already or a different data point was lucky enough to be mapped in the same way by each of the k hash functions. Either way, we don't lose anything since in the worst case scenario, we stopped a user from choosing a username that wasn't already taken which doesn't cause inconsistencies in our dataset. 
- However, if at least one bit is 0, then for at least 1 hash function, our new entry E didn't give the same output as *any*  of our past data points. This guarantees that E is not present in the dataset and thus our data structure can give a **confident NO** and allow the user to choose this username.  

**Space-accuracy tradeoff** - as you might have concluded by now, false positives can occur (saying an entry exists in the dataset even though it doesn't) and choosing a **high k value** and/or **larger array** can reduce the probability of this scenario happening. So a natural choice is to use a large number of hash functions and see your data structure become more and more "accurate". However, a large array means more storage space needed and a high k value increases the constant time per operation, since each query requires computing k hash functions. Thus, Bloom filters are supposed to have an O(k) runtime independent of the dataset size, making them very scalable.

This topic was explained to me wonderfully by [Professor Luc Devroye](https://luc.devroye.org) in one of his courses. I have omitted the mathematical explanation of choosing a certain number of hash functions for a desired false-positive probability but it can be computed fairly easily with standard expected-value computations. Any errors are my own.