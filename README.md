# react-stoon

<p align="center">
    <a href="https://www.npmjs.com/package/@moroccan-oss/react-stoon">
        <img src="https://img.shields.io/npm/v/@moroccan-oss/react-stoon.svg"
            alt="npm version">
    </a>
    <a href="https://github.com/@moroccan-oss/react-stoon/blob/master/LICENSE.md">
        <img src="https://img.shields.io/npm/l/@moroccan-oss/react-stoon.svg"
            alt="license">
    </a>
    <a href="https://david-dm.org/MoroccanOSS/react-stoon">
        <img src="https://david-dm.org/MoroccanOSS/react-stoon/status.svg"
            alt="dependency status">
    </a>
    <a href='https://gitter.im/MoroccanOSS/react-stoon?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge'>
        <img src='https://badges.gitter.im/MoroccanOSS/react-stoon.svg'
            alt='Join the chat at https://gitter.im/MoroccanOSS/react-stoon'>
    </a>
</p>


react-stoon is a handy toolbox of reusable Components that allow you to reduce boilerplate by writing less js inside of your React Components.


react-stoon is a fast growing toolbox aspiring to be your lodash for React.


### Show

renders `$` only if `if` is truthy.

```jsx
const MyComponent = ({ shouldShowText }) => {
    return (
        <Show
        $={Text}
        if={shouldShowText}
        >
            You can see this text, only if props.if is true
        </Show>
    );
}
```

### Repeat

creates `times` copies of `$`.

```jsx
const MyComponent = () => {
    return (
        <Repeat
        $={Text}
        times={5}
        >
            This Text will be repeated 5 times
        </Repeat>
    );
}
```

### Switch

renders `Switch.Case` if `value` matches `target`.

```jsx
const MyComponent = () => {
    return (
        <Switch
        $={Div}
        target='Hello'
        >
            <Switch.Case
            $={Text}
            value='Hey'
            >
                the target equals Hey
            </Switch.Case>
            <Switch.Case
            $={Text}
            value='Hello'
            >
                the target equals Hello
            </Switch.Case>
        </Switch>
    );
}
```

### LifeCycleAware

allows you to use React's lifecycle Hooks without turning your component to a class.

```jsx
const MyComponent = () => {
    return (
        <LifeCycleAware
        $={Text}
        willMount={() => console.log('Will Mount!')}
        didMount={() => console.log('Did Mount!')}
        >
            Hello, I am a LifecycleAwareComponent!
        </LifeCycleAware>
    );
}
```
