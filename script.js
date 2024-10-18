// Create Single element

// const div = React.createElement('div', {className:'text'}, "Hello from Shubhasheesh using React")
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(div)


// Add childm tp parent
// const child = React.createElement('p', {}, "I am child of div(text) element")
// const div = React.createElement('div', {className:'text'}, child)
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(div)

// sibling hierarchy
const child1 = React.createElement('p', {}, "I am child 1 of div(text) element")
const child2 = React.createElement('p', {}, "I am child 2 of div(text) element")
const div = React.createElement('div', {className:'text'}, [child1, child2])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)