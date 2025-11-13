---
layout: post
title: Theory of Computation
date: 2025-11-10 14:24:00
description: fun facts about computation
tags: computer-science
categories: academic
featured: true
---

Following are some of my key takeaways from a theoretical computer science course, *COMP 330 - Theory of Computation* taught by [Jérôme Waldispühl](https://www.cs.mcgill.ca/~jeromew). They touch the concept of Turing Machines and how powerful any computer can be. The course covered more topics like Regular Languages, Deterministic Finite Automata (DFA) and Non-Deterministic Finite Automata (NFA), Context-Free Languages, Pushdown Automata (PDA) among others. 

- Imagine the most powerful program written in any language of your choice - strong but not any stronger than a Turing Machine! **Turing Machine**: a simple machine with an infinite tape, a head and a pointer but as powerful as the most powerful computers in the world.
- There are some modifications that once can do to Turing Machines such as non-determinism, multiple tracks, multiple heads and we'd expect that this makes it more powerful since it can now perform more operations than a basic Turing Machine. However, all of these modifications, even when combined together can not make a Turing Machine any stronger. This means that even the **basic Turing Machine** is the **strongest Turing Machine** you can ever have!
- Another way of explaining **P and NP classes**, different from a solution being polynomial time verifiable and/or computable - P includes problems that can be solved in polynomial time by a deterministic Turing Machine. NP included problems solved in polynomial time by a non-deterministic Turing Machine.
- Cool thing about a **non-deterministic machine** - it speeds up computation since we assume that if there is a right choice to made amongst a set of choices, it will always choose the right one. Sounds too good to be true, right? It is! This is just a thought process. The only way to actually implemenet an NTM is via a DTM. An NTM would explore all choices at the same time and know which is the right one. However, a DTM would explore each choice one by one and then find the correct one. This is why DTM can have exponential runtimes even though an NTM will run in poly time for the same problem
- Using some techniques, machines, strings and other objects can be represented by an integer. Thus you can also enumerate it by a bijective function between that set and positive integers. 
- However **languages aren't enumerable**! This follows a similar proof to showing that there are more Real Numbers than Natural Numbers. Thus, there are more languages in the world than programs possible. Yet, you can't describe such a language! [1] 
- The above statement tells that there are some languages for which membership can't be determined since no program exists. Thus there are certain **problems that are unsolvable** in the world, even by quantum computers!!

Thank you for reading! The post will be updated as the course progresses.

[1]: This is an example of a Hungarian argument.