---
layout: post
title: Reinforcement Learning Basics
date: 2026-02-26 14:24:00
description: exploring some key concepts in rl
tags: computer-science ml rl
categories: academic
featured: true
---

This post dives into the field of Reinforcement Learning, the same field that has powered some of the recent LLM marvels such as reasoning and better responses to user questions.

Imagine a pet animal that doesn't know explicitly what actions are right or wrong. It jusyy does an action and then observes how its owner reacts to it and then decide whether to do it again in the future or not. What if the owner reaction changes to the same action that happened at two different times? That makes it a bit harder for the pet to decide if it's objectively good or bad; maybe its rightfulness is circumstantial? This is quite similar to how we teach agents in Reinforcement Learning and this is just a glimpse of one of the many problems that we as designers have to figure out in order to make our agent learn the best even in a completely unknown environment!

Before we go into the different RL policies and learning algorithms, let's familiarize ourselves with some basic terminology that will be used frequently in the future - 
1. regret -    

### Bandits
Bandits are the simplest form of RL agents. The agent has n actions to choose from. As soon as it performs an action, it gets an immediate reward and re-enters the state where it has to choose which action to do next. The agent's objective is to maximize the expected return by choosing certain actions. Since the reward from each action/arm can differ at different times (because we assume each action has a reward distribution from which we sample the reward at a specific time), the agent must be smart and try to find an optimal action. 



### Finite Horizon Problems


These topics were explained wonderfully by [Doina Precup](https://mila.quebec/en/directory/doina-precup), Canada CIFAR AI Chair and Research Team Leader, Google DeepMind, and [Nishanth Anand](https://mila.quebec/en/directory/nishanth-anand-vemgal) in one of their courses.