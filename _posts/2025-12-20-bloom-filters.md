---
layout: post
title: Bloom Filters
date: 2025-12-20 14:24:00
description: exploring one of my favorite data structures 
tags: computer-science
categories: academic
featured: true
---

When making a new Google account, you type in an account name and the website *almost instantly* tells you wether this account name is taken or not. But how is it so fast? A simple search would take O(N) time, iterating through all the entries. Assuming they store the names in an alphabetic order, it would stil O(logN) time. Better but considering they have over a billion accounts, even that logarithmic improvement isn't fast enough to match the speed with which it tells if a username is taken or not. **So how does it work?**

