---
layout: post
title: Ford-Fulkerson and Edmonds-Karp
date: 2025-07-21 14:24:00
description: some of the fascinating things about max. flow computation
tags: computer-science
categories: academic
featured: true
---


This post is a summary of the fascinating things I learnt while studying Flow Networks in COMP 252 at McGill University. Some of the things are inspired by the brilliant reasoning given by the wonderful instructor, Luc Devroye. This post assumes some basic knowledge about flow networks, the concept of maximum flow and the time complexities of the above mentioned techniques.  

Ford Fulkerson is a method to compute the maximum flow possible in a flow network. An important remark - it's a **method** and not an **algorithm** since it doesn't specify how to choose the augmenting path. Some people call it an algorithm since DFS is commonly used in its implementation. Overall, it's quite straightforward once read through the whole of its working methodology even though sometimes it's mathematical description can be a bit daunting.  

From a general understanding, it might seem that the only difference between Ford-Fulkerson and Edmonds-Karp is that one has a freedom between DFS and BFS while the other uses BFS in every iteration. This gives a different run-time complexity of both these algorithms - Ford-Fulkerson has a complexity of $O(E \cdot f)$ whereas Edmonds-Karp has that of $O(V \cdot E^2)$ where \(V\) is the number of vertices, \(E\) is the number of edges and \(f\) is the maximum flow value.  

But there's something more interesting happening - one of these implementations is independent of the maximum flow possible in the network and that makes all the difference. 

The difference makes a lot more sense the way it was explained to me so I'll try to pass it on. Ford-Fulkerson is dependent on the maximum flow of the network since it relies on the fact that at each iteration, we can pass at least 1 unit of flow through the network and this process can be repeated at most *maximum flow* number of times. But what if we aren't guaranteed to pass 1 unit of flow at each iteration (one such case - the capacities aren't integer values)? This shakes up the fundamental basis of what ensured termination of this method. In such a case, the algorithm simply wouldn't stop. And that's where Edmonds-Karp shines. It's an algorithm that will surely stop in a finite amount of time no matter how the individual capacity values are structured (if they are integers, real numbers or even transcendentals!)

I feel this reasoning explains better why Edmonds-Karp is a stronger algorithm (and an actual algorithm between the two) and highlights how just a choice as basic and fundamental as that of the method of tree traversal can affect the algorithm in multiple ways. Thanks for the read!