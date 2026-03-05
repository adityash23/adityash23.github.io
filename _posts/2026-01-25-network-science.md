---
layout: post
title: Network Science
date: 2026-01-25 14:24:00
description: exploring the world of networks
tags: computer-science
categories: academic
featured: true
---

Graph theory concepts not directly applicable in real-world graphs because of Power law and existence of nodes with a very high and very low number degree.  

Real world graphs are sparse and thus adjacency matrix is majorly filled with 0. Adjancency matrix is O(N^2). Alternatives - LIL, COO, CSR are O(N) in general.  

Incidence matrix - rows are nodes but columns are edges. B_{ij} = 1 if node i is incident to edge j. O(n.m) for n nodes, m edges. B.B^T = A + D  

Adjacency matrix - rows and columns are nodes. A_{ij} = 1 if node i is connected to node j. O(n^2) for n nodes.  

Connectivity - nodes connected by edges.  

Strongly connected components - set of nodes such that each pair of nodes has a path between them.  

Weakly connected components - set of node sthat become SCC if we ignore edge direction.  

In/Out components - nodes that reach to/from the SCC.  

Degree matrix - N x N matrix of all zeroes on non-diagonal entries. Diagonal value A_{ii} = degree of node i.  

Laplacian Matrix = D - A. Each row and column sum to 0
- smallest eigen value of L is always 0
- second smallest is non-zero only if graph is connected
- number of 0 eigen values is the number of connected components

Induced subgraph - edges between subset of nodes in original graph.  

Clique = complete subgraphs. 3-cliques very common in real life.  

K-core = maximal subgraph where degree of each node is at least k. 1 core = full graph. A way to consider only the important nodes (i.e. with high degree) as we increase k

Power law - linear relationship between log(degree) and log(frequency of these degrees). Suprisingly common in real life - Pareto distribution and Zipf's law

Scale free - Power law is scale invariant (F(lambda . x) = lambda^a . f(x))

Heavy tailed degree distribution - many nodes with small degrees, very few nodes with high degrees

Assortavity - strong correlation between nodes and their edges (nodes connect more to either similar or dissimilar nodes)

A^2 : tracks paths of length 2
- A2_{ij} = number of common neighbours b/w i and j => no. of ways to go from i to j
- A2_{ii} = number of neighbours of i => ways to go from i to i by passing through 1 node (this is the neighbour)

A^3_{ii} = 2 x number of triangles in graph (start and end at i, go through 1 other node)

Clustering coefficients - out of all the triangles that a node could be a part of, how many triangles actuallly exist?
- Local CC = A^3_{ii}/(d_i)(d_i - 1) and then averaged over all nodes in the graph
- Global = # triangles / # triangbles 
** Triangbles - number of all length=2 walks that can be a triangle if endpoints were connected

Number of triangles in undirected graph = Trace(A^3)/6