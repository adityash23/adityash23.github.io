---
layout: post
title: Finite Difference vs Backpropagation
date: 2025-11-20 14:24:00
description: comparison between two gradient computation techniques in machine learning
tags: computer-science ml
categories: academic
featured: false
---

This post explores 2 techniques of updating model weights for neural networks - Forward and Backward Propagation. While they both achieve the same end goal of computing derivates of the cost function and updating model weights, there implementation makes a big difference in the runtime and practicality of choosing one over the other in most of the models.

