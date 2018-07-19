# react-stoon

<p align="center">
    <a href="https://www.npmjs.com/package/react-stoon">
        <img src="https://img.shields.io/npm/v/react-stoon.svg"
            alt="npm version">
    </a>
    <a href="https://github.com/MoroccanOSS/react-stoon/blob/master/LICENSE">
        <img src="https://img.shields.io/npm/l/react-stoon.svg"
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

## Install

```
npm install react-stoon --save
```


### Show

renders `$` only if `if` is truthy.

```jsx
const MyComponent = ({ shouldShowText }) => {
    return (
        <Show if={shouldShowText}>
            <Text>You can see this text, only if shouldShowText is truthy</Text>
        </Show>
    );
}
```
### Hide

hides `$` only if `if` is truthy.

```jsx
const MyComponent = ({ shouldNotShowText }) => {
    return (
        <Hide if={shouldNotShowText}>
            <Text>You can see this text, only if shouldNotShowText is false</Text>
        </Hide>
    );
}
```

### Repeat

#### foearch

creates a clone of `props.children` for each element of `props.foreach` while passing the current object as a prop with the alias defined by `as`.

```jsx
const Book = ({children, book}) => {
    return (
        <div>
            <div>Book name {book}</div>
        </div>
    )
};
const books = ['Clean Code', 'Code Complete', 'The pragmatic programmer'];
const MyComponent = () => {
    return (
        <Repeat foreach={books} as='book'>
            <Book />
        </Repeat>
    );
}
```

#### times

creates `times` copies of `props.children` while passing the index as a prop with the alias defined by `as`.

```jsx
const MyDiv = ({children, index}) => {
    return (
        <div>
            <div>Element Number {index}</div>
            <div>{children}</div>
        </div>
    )
};
const MyComponent = () => {
    return (
        <Repeat times={5} as='index'>
            <MyDiv />
        </Repeat>
    );
}
```

### Switch

renders `Switch.Case` if `value` matches `target`, renders `Switch.Default` if none matched.

```jsx
const MyComponent = () => {
    return (
        <Switch target={message}>
            <Switch.Case value='hey'>
                It's hey!
            </Switch.Case>
            <Switch.Case value='hello'>
                It's hello!
            </Switch.Case>
            <Switch.Default>
                It's neither hey nor hello !
            </Switch.Default>
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
        willMount={() => console.log('Will Mount!')}
        didMount={() => console.log('Did Mount!')}
        >
            <Text>Hello, I am a LifecycleAwareComponent!</Text>
        </LifeCycleAware>
    );
}
```


### Promiser

```jsx

const MyComponent = () => {
    return (
      <Promiser
        preload={true}
        preloadComponent={<Preloader />}
        promise={getUser("younesshakky")}
        catch={err => <ErrorComponent message={err.message}/>}
        render={user => <UserInfo user={user} />}
      />
    );
}
```
