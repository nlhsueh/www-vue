

## 05 Fallthrough attributes

A component can be called with attributes that are not declared as props, and they will simply fall through to the root element in the component.

With fallthrough attributes you get a better overview from the parent where the component is created, and it simplifies our code because we don't need to declare the attribute as a prop.

Typical attributes used to fall through are **class**, **style** and **v-on**.

## 06 Scoped styling

Styling defined inside the `<style>` tag in a component, or in App.vue, is actually available globally in all components.

To keep the styling limited locally to just the component, we can use the scope attribute on that component: `<style scoped>`


## 07 Local components

The way we have included components so far makes them accessible from all *.vue files in a project.

Components can be made to be local, meaning that they are only accessible inside a specific *.vue file.

## 08 Slot

Slots are a powerful feature in Vue that allow for more flexible and reusable components.

We use slots in Vue to send content from the parent into the `<template>` of a child component.

## 09 Dynamic components

Dynamic Components can be used to flip through pages within your page, like tabs in your browser, with the use of the 'is' attribute.

## 10 Teleport

The Vue <Teleport> tag is used to move content to a different place in the DOM structure.

## HTTP Requests

The HTTP request is a part of the communication between a client and a server.

The client sends an HTTP request to the server, which handles the request and returns an HTTP response.