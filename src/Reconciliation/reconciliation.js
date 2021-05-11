// Reconcilliation

/* 
    Speed of react rendering new tree is O(n) based on two assumptions:
    -Two elements of different types will produce different trees.
    -The developer can hint at which child elements may be stable across different renders with a key prop.

    Meaning:
    React will first check root element, for example <div> if new tree that we want to render is with root <span> React will automaticly tear down whole old tree and
    will build new one.
    Also, if root elements are the same, React will second thing check their props pointing at className or functionality

    Considering key prop between siblign elements, in lists, react will just check and existance of keys and based on them will add new elements without re-rendering existing ones.

    When tearing down DOM tree, elements will first receive componentWillUnmount(), and then will be destroyed.
    When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive UNSAFE_componentWillMount() and then componentDidMount().

    1. The algorithm will not try to match subtrees of different component types. If you see yourself alternating between two component types with very similar output, you may want to make it the same type. In practice, we haven’t found this to be an issue.

    2. Keys should be stable, predictable, and unique. for example, using Math.Random as a key prop will make elements re-render again,
    because elements will receive new Math.Random key each time element is called for render

*/