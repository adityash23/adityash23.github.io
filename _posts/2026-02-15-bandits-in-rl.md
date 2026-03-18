---
layout: post
title: Bandits in Reinforcement Learning
date: 2026-02-15 14:24:00
description: exploring some bandit algorithms
tags: computer-science ml rl
categories: academic
featured: true
---

### Bandits
Bandits are the simplest form of RL agents. The agent has $n$ actions to choose from. As soon as it performs an action, it gets an immediate reward and re-enters the state where it has to choose which action to do next. The agent's objective is to maximize the expected return by choosing certain actions. Since the reward from each action/arm can differ at different times (because we assume each action has a reward distribution from which we sample the reward at a specific time), the agent must be smart and try to find an optimal action. 

We'll use the following terminology - 
- $\pi$ will be the policy that tells our agent which action to choose from the action space
- $R$ will be the reward distribution of the action chosen
- $R_t$ is the reward observed at time t upon performing the action $A_t$
- $q_*(a)$ is the Action Value of action a. This is the true value of performing this action however this is not known to the agent so we estimate it using $\mathbb{E}[R_t|A_T = a]$
- $N_t(a)$ is the number of times we have performed action a till time t 

A simple way to find the optimal action is to perform different actions, observe their reward and try to use the (average of) past rewards obtained from each arm as an estimate of how good this action will be in future. Thus we use $Q_t(a)$ as our estimate of the reward we expect to receive by performing action a at time t.

$$
Q_t(a) = \frac{\sum{\text{rewards when action a performed till time t}}}{\text{number of time action a performed till time t}} 
$$

Central Limit Theorem tells us that $\lim_{N_t(a) \to \infty} Q_t(a) = q_*(a)$.

This technique of finding the optimal action works fine as long as the reward distribution of each action stays same over time. This is called as the **Stationarity Assumption**. In case the distrbutions change, by doing a simple average over past rewards, we are giving equal weight to rewards in near past and far in the past where the distribution was different from the current one.

**Non Stationarity Problem** is solved by performing an exponential, recency weighted average over the rewards. Future notation assumes computation over a single action but we can generalize to multiple actions as well.

$$
Q_{n+1} = Q_n + \alpha \times [R_n - Q_n] = (1 - \alpha)^nQ_1 + \sum_{i = 1}^{n}\alpha (1 - \alpha)^{n-i}R_i
$$

We have a parameter $\alpha \in(0, 1]$ where a higher $\alpha$ gives more attention to recent rewards.

To ensure convergence $Q \to q_*$, we need to follow the two conditions listed below - 
1. $\sum_{n=1}^{\infty} \alpha_n(a) = \infty$
2. $\sum_{n=1}^{\infty} \alpha^2_n(a) < \infty$

Based on our estimates, a new term can be introduced that tells us the action that will give the best reward based on our estimates till now : $A_t^* = \argmax_a Q_t(a)$. If this is the action we actually choose at time t ($A_t = A_t^*$) then it's called **exploitation**.

#### epsilon-greedy Action Selection
If we always *exploit*, meaning being greedy with respect to the estimates so far, then we risk not finding the true optimal action. Thus we should also **explore** where at time t, we choose an action that is not the greedy action. 

A way to formalize is this using the $\epsilon$-greedy action selection where with a probability $p = \epsilon$, we choose a random action (the greedy action could also be chosen) and thus *explore* and with a probability $p = 1 - \epsilon$, we choose the greedy action and thus *exploit*.

** Even with an $\epsilon = 0$, we can explore different actions. Let's say we initialize rewards = 0 for all actions and randomly choose an action (since all actions are optimal at this point, we could choose any) $A_x$. We continue choosing it, observing a reward and maintaining an average. As long as the average stays positive, we choose $A_x$, but as soon as the average goes negative, the other actions become *better* than $A_x$ now so we choose one of those.

A common approach is to start with a high $\epsilon$ value to allow exploration initially and find the optimal action. Then, we decrease the $\epsilon$ to start exploiting our estimated optimal action.

#### Optimistic Value Initialization
Instead of initializing rewards to 0 and running into problems with exploration, another way is to set it to the highest value we can ever expect from that action. Now it's okay to be greedy with respect to $Q_t(a)$ when choosing the next action to do. For any aciton, all rewards at any time step is less than the initial value so after performing an action, say $a_1$ at time $t$, we decrease its average return value so other actions are explored afterwards.

This method allows for exploration but comes at the cost of slow learning since there is a high random action choosing initially. However, it ultimately gives a high asymptotic value.

#### Upper Confidence Bound
This is a method to implement optimistic value initialization that -
- reduces exploration over time
- estimates an upper bound on true action values (and now we can be greedy with respect to these estimates)

$$
A_t = \argmax_a [Q_t(a) + c\sqrt{\frac{\log t}{N_t(a)}}]
$$

An intuitive way to understand the above formula is the following - 
1. $N_t(a)$ is in the denominator since the more we have tried an action (high $N_t(a)$), the more certain we are about its bound so we try other actions instead and decrease its probability of being chosen
2. $\log t$ is in the numerator since if we have not tried an action for a long time (high $\log t$), we would like to chose this as well and update our bound for it

* The algorithm must try all actions at least once since $N_t(a) > 0$ is required for each action. After this initial exploration, we start to learn.

### Gradient Based Algorithms
This class of algorithm uses a learned preference function, $H_t(a)$, that tells which action to choose at time t. This function tells us how likely an action is to be the optimal action.

$$
\text(probability)(A_t = a) = \frac{e^{H_t(a)}}{\sum_a e^{H_t(a)}} = \pi_t(a)
$$

#### Softmax Exploration
This method estimates $H_t(a)$ using $Q_t(a)$ by doing $H_t(a) = \frac{Q_t(a)}{T}$ where T is Temperature parameter. A high T leads to uniform choice for all actions whereas a low T close to 0 makes the algorithm behave same as greedy with respect to $Q_t(a)$

#### Probability Matching
This method takes action based on their probability of it being optimal. This probability is computed based on the history of rewards seen so far. In order to do this, we maintain an entire probability distribution of rewards for each action instead of just $Q_t(a)$. At decision time, we choose the action that has the *highest expected reward* as per our reward distribution estimates so far.

#### Thompson Sampling
This method maintains $R_a$ which is the reward distribution for each arm. We start with a prior distribution $p_0(R_a)$ for each arm. At time t, we choose the action with the best mean based on distribution estimates so far. After observing the reward from the action, we update the posterior of that action's reward distribution, $R_a$, to get an improved reward distribution.

This method uses **Bayesian Reasoning** to motivate its working and distribution updates.

Since our estimated reward distribution is computed using both the prior and all observed rewards, thus it works only for *stationary problems*. For non-stationary problems, we can remove the past data from our distribution estimate as we observe more rewards but keep the *prior* distribution same always.

Having a strong prior means new data has less impact on updating the reward distribution and thus it allows for more exploration in the beginning since the mean of all actions are roughly the same.

** In the limit, both strong and weak priors would converge to the true reward distribution of arms, though the speed of convergence would be different.

** Thompson Sampling is an optimal strategy since it achieves $O(\log t)$ regret.

### Contextual Bandits
Unlike regular bandits, contextual bandits have their reward distribution dependant on the context of the state. Thus in order to choose the optimal action, we must assign importance to certain features present in the context and update our distributions accordingly.

We use a function approximator $Q_w(x, a)$ to estimate action values based on the context $x$, action $a$ and parameters $w$ of the approximator.

Since our rewards depend on the context, instead of just avergaing all past rewards for a current action, we should consider only the rewards received in past with the same context as the current context.


These topics were explained wonderfully by [Doina Precup](https://mila.quebec/en/directory/doina-precup), Canada CIFAR AI Chair and Research Team Leader, Google DeepMind, and [Nishanth Anand](https://mila.quebec/en/directory/nishanth-anand-vemgal) in one of their courses.