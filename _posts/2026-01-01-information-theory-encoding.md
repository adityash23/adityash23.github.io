---
layout: post
title: Information Theory & Encoding
date: 2026-01-01 14:24:00
description: diving into the limits of data compression
tags: computer-science
categories: academic
featured: true
---

When converting an image from PNG to JPEG, the file size seems to drop but the image still looks *the same*. So what exactly happened there? While this isn't a post about image compression specifically, it creates a question of how to convey the same information while still reducing size? More importantly, is there a limit to which I can *compress*  things? [[1]](#ps-note)

Before we dive into data compression, let's explore an even more fundamental topic - **Information Theory** founded by Claude Shannon, who Master's thesis is considered as one of the most important theses in the history of science and engineering. It tells us about transferring information between locations and finding optimal ways to do so. 

One of the key aspects is **Entropy** which is a measure of information (or randomness) present in a source and dictates the limits of how much something can be compressed. It's mathematically calculated as (x signifies a symbol in the alphabet X, p(x) is the probability of the symbol x) - 

$$
H(X) = -\sum_{x \in X} p(x)\log_2 p(x)
$$

A practical interpretation is that higher the entropy, more information a source contains. For example, a sequence 000000... that has all zeroes and no randomness contains less information and thus has a low entropy (we know that all bits are 0 so no more information is *learned*  from this source even if we read more input). However, a random sequence of bits is hard to predict and thus has a higher entropy. Entropy can be thought of as the minimum number of bits per symbol needed to convey a message from a source and thus gives a upper bound to how much data compression is possible. [Examples on calculating entropy](#entropy-examples).

Takeaway : > Higher entropy means more uncertainty and less compressibility.

Before diving in, a key terminology is **Lossless compression** which is a technique of compression such that for a pair of original sequence, A, and its compressed/encoded version, B, given the compressed version B and compression rules, is it possible to retrieve the entire original sequence A without losing any information present in it?

Now that we know the limits of compressions and some important terminology, let's explore some of the ways to actually do this compression. A key observation to make is that compression techniques use repetition of symbols in a message to reduce the size needed to convey it.

#### LZ compression


#### Huffman encoding


<a id="ps-note"></a>
[1] - This is not a perfect analogy since JPEG is a lossy compression so some information about original image is lost, even though this change in pixels might not be visible.

<a id="entropy-examples"></a>
[Examples on calculating entropy] - 
If a source always outputs the same symbol: $p(x) = 1$ then its entropy is calculated as follows -

$$
H(X) = -1 \cdot \log_2(1) = 0
$$

Thus we don't really any bit to convey this information since we already know that the source always tells the same thing.

A fair coin has two outcomes with equal probability: $p(H) = 0.5,\quad p(T) = 0.5$ so its entropy is calculated as follows -

$$
\begin{aligned}
H(X) &= -\sum p(x)\log_2 p(x) \\
     &= -[0.5\log_2(0.5) + 0.5\log_2(0.5)] \\
     &= 1 \text{ bit}
\end{aligned}
$$

Thus we just need 1 bit to tell us whether the source (coin) tells us H or T.