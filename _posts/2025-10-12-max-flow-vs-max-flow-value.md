---
layout: post
title: Max Flow vs Max Flow Value
date: 2025-10-25 14:24:00
description: clarifying two concepts often misunderstood
tags: computer-science
categories: academic
featured: true
---

The motivation for this post comes from an encounter I had with these 2 concepts and a subtle mix up that could affect the entirety of the problem at hand. The post assumes knowledge about flow networks, the concept of maximum flow and Ford Fulkerson or any other max flow computing *algorithm*.

As any max flow algorithm works, it repeatedly finds an Augmenting Path, pushes the bottleneck flow through it until no paths connecting the source to the sink remain. Before we get any deeper into the topic, a clarification on the definition of what a **flow** means. It's a function mapping the edge set to the Real numbers.

$$
f: E \rightarrow \mathbb{R}
$$

It effectively assigns a numerical value to each edge in the graph and tells how much flow is being pushed through that particular edge in the current iteration. Contrary to a common misinterpretation, flow is not a single number.

So each iteration computes its own *flow* function based on the augmenting path chosen. The **max flow** is another function which can be thought of being constructed as the sum of all previous *flow* functions for each edge.

$$
\text{max_flow}(e) = \text{flow}_1(e) + \text{flow}_2(e) + \dots + \text{flow}_m(e) \quad \forall e \in E
$$

The **max flow value** is the sum of bottleneck capacities of all past iterations or more formally described as the sum of *max flow* function evaluated at each edge leaving the source node or entering the sink node. This is indeed a number and not a function.

$$
\text{value}(\text{max_flow}) = \sum_{(s, v) \in E} \text{max_flow}(s, v)
$$

I hope this post helps clarify the subtle but important difference between *max flow* and *max flow value*.