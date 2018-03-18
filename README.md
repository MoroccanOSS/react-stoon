# react-stoon

react-stoon is a handy toolbox of reusable Components that allow you to reduce boilerplate by writing less js inside of your React Components.


react-stoon is a fast growing toolbox inspiring to be your lodash for React.


### Show

renders `$` only if `if` is truthy.

```
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

```
const MyComponent = () => {
    return (
        <Show
        $={Text}
        times={5}
        >
            This Text will be repeated 5 times
        </Show>
    );
}
```

### Switch

renders `Switch.Case` if `value` matches `target`.

```
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

```
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
