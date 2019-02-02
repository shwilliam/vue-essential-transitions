# vue-essential-transitions

> A collection of native Vue transition styles for quick prototyping

[![vue-essential-transitions example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/rl27rwmxjo)

## Transitions

Transition name     | Description
--------------------|-----------
v-fade              | Transition opacity
v-grow              | Scale into view
v-slide             | Slide in from right of window
v-slide-left        | Slide in from left of window
v-slide-fade        | Slide in from right and transition opacity
v-slide-fade-left   | Slide in from left and transition opacity
v-slide-fade-down   | Slide down and transition opacity
v-slide-fade-up     | Slide up and transition opacity

## Installation

Install the package from npm by running

```
$ npm install --save vue-essential-transitions
```

or

```
$ yarn add vue-essential-transitions
```

## Usage

Simply import the minified CSS file and reference a [transition name](##Transitions) in the name attrubute of a <transition> element, for example, '<transition name="v-fade"><FadingEl /></transition>.

```
<template>
    <transition name="v-fade">
      [...]
    </transition>
</template>

<script>
import "vue-essential-transitions";

[...]
</script>
```

## Dev

Running example script requires @vue/cli and @vue/cli-service-global to be installed.
Install globally by running

```
$ npm install --save --g @vue/cli @vue/cli-service-global
```

or

```
$ yarn add global vue/cli @vue/cli-service-global
```
