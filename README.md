# vue-essential-transitions

> A collection of small native Vue transition styles for quick prototyping

[![vue-essential-transitions example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/rl27rwmxjo)

## Transitions

Transition name | Description
----------------|-----------
fade            | Simple opacity transition
fade-in         | Slide in and transition opacity

More transitions coming soon...

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

Simply import the minified CSS file and reference a [transition name](##Transitions) in the name attrubute of a <transition> element, for example, '<transition name="fade"><FadingEl /></transition>.

```
<template>
    <transition name="fade">
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
