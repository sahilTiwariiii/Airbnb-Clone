**All react Hooks** <br/>

1)useState <br/>
2)useEffect <br/>
3)useContext <br/>
4)useReducer <br/>
5)useCallback <br/>
6)useMemo <br/>
7)useRef <br/>
8)useImperativeHandle <br/>
9)useLayoutEffect  <br/>
10)useDebugValue <br/>
11)useDeferredValue <br/>
12)useTransition <br/>
13)useId <br/>
14)useSyncExternalStore <br/>
15)useInsertionEffect <br/>
16)useNavigate <br/>
17)useLocation <br/>
18)useParams <br/>
19)useRouteMatch <br/>
20)useHistory <br/>
21)useMemo <br/>
22)useCallback <br/>
23)useRef <br/>
24)useIdle <br/>

<details>
  <summary>useState</summary>
  <p>यह state variables को define करने के लिए उपयोग होता है।</p>
  <pre>
  const [count, setCount] = useState(0);
  </pre>
</details>

<details>
  <summary>useEffect</summary>
  <p>यह side effects को handle करने के लिए उपयोग होता है।</p>
  <pre>
  useEffect(() => {
    console.log('Component rendered!');
  }, [count]);
  </pre>
</details>

<details>
  <summary>useContext</summary>
  <p>यह context API के साथ उपयोग होता है ताकि आप props को बिना drill किए पास कर सकें।</p>
  <pre>
  const value = useContext(MyContext);
  </pre>
</details>

<details>
  <summary>useReducer</summary>
  <p>यह complex state logic को handle करने के लिए इस्तेमाल होता है।</p>
  <pre>
  const [state, dispatch] = useReducer(reducer, initialState);
  </pre>
</details>

<details>
  <summary>useCallback</summary>
  <p>यह function को memoize करता है ताकि performance optimized रहे।</p>
  <pre>
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, [dependency]);
  </pre>
</details>

<details>
  <summary>useMemo</summary>
  <p>यह expensive computations को memoize करता है।</p>
  <pre>
  const computedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  </pre>
</details>

<details>
  <summary>useRef</summary>
  <p>यह mutable values या DOM elements को reference करने के लिए इस्तेमाल होता है।</p>
  <pre>
  const inputRef = useRef(null);
  </pre>
</details>

<details>
  <summary>useImperativeHandle</summary>
  <p>यह parent components को child component की internal methods को access करने की सुविधा देता है।</p>
  <pre>
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  </pre>
</details>

<details>
  <summary>useLayoutEffect</summary>
  <p>यह DOM mutation के बाद तुरंत चलता है।</p>
  <pre>
  useLayoutEffect(() => {
    console.log('Layout effect!');
  }, []);
  </pre>
</details>

<details>
  <summary>useDebugValue</summary>
  <p>यह custom hooks को debug करने के लिए एक label देता है।</p>
  <pre>
  useDebugValue(isOnline ? 'Online' : 'Offline');
  </pre>
</details>

<details>
  <summary>useDeferredValue</summary>
  <p>यह low-priority state को defer करने के लिए इस्तेमाल होता है।</p>
  <pre>
  const deferredValue = useDeferredValue(value);
  </pre>
</details>

<details>
  <summary>useTransition</summary>
  <p>यह concurrent mode में state update को non-blocking बनाता है।</p>
  <pre>
  const [isPending, startTransition] = useTransition();
  </pre>
</details>

<details>
  <summary>useId</summary>
  <p>यह unique IDs generate करने के लिए इस्तेमाल होता है।</p>
  <pre>
  const id = useId();
  </pre>
</details>

<details>
  <summary>useSyncExternalStore</summary>
  <p>यह external stores के साथ synchronization के लिए होता है।</p>
  <pre>
  const state = useSyncExternalStore(subscribe, getSnapshot);
  </pre>
</details>

<details>
  <summary>useInsertionEffect</summary>
  <p>यह styles को DOM में insert करने से पहले synchronize करने के लिए होता है।</p>
  <pre>
  useInsertionEffect(() => {
    insertStyles();
  }, []);
  </pre>
</details>


<details>
  <summary>useNavigate</summary>
  <p>यह React Router में navigation के लिए इस्तेमाल होता है।</p>
  <pre>
  const navigate = useNavigate();
  navigate('/path'); // Navigation to a different path
  </pre>
</details>

<details>
  <summary>useLocation</summary>
  <p>यह current location के बारे में जानकारी प्राप्त करने के लिए उपयोग होता है।</p>
  <pre>
  const location = useLocation();
  console.log(location.pathname); // Current path
  </pre>
</details>

<details>
  <summary>useParams</summary>
  <p>यह route parameters को प्राप्त करने के लिए उपयोग होता है।</p>
  <pre>
  const { id } = useParams(); // Getting the 'id' parameter
  </pre>
</details>

<details>
  <summary>useRouteMatch</summary>
  <p>यह current route के match को check करने के लिए इस्तेमाल होता है।</p>
  <pre>
  const match = useRouteMatch('/path'); // Check if the current route matches
  </pre>
</details>

<details>
  <summary>useHistory</summary>
  <p>यह React Router में history को manage करने के लिए उपयोग होता है।</p>
  <pre>
  const history = useHistory();
  history.push('/new-path'); // Navigate programmatically
  </pre>
</details>

<details>
  <summary>useMemo</summary>
  <p>यह memoization के लिए उपयोग होता है ताकि expensive calculations को optimize किया जा सके।</p>
  <pre>
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  </pre>
</details>

<details>
  <summary>useCallback</summary>
  <p>यह function को memoize करने के लिए उपयोग होता है ताकि unnecessary re-renders से बचा जा सके।</p>
  <pre>
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  </pre>
</details>

<details>
  <summary>useRef</summary>
  <p>यह mutable values या DOM elements को reference करने के लिए उपयोग होता है।</p>
  <pre>
  const inputRef = useRef(null);
  </pre>
</details>

<details>
  <summary>useIdle</summary>
  <p>यह hook idle state को manage करने के लिए उपयोग होता है।</p>
  <pre>
  const isIdle = useIdle();
  </pre>
</details>


**Important Resources**
<details>
<summary>Resources<summary/>
<p>1) Dipesh Malavia in one Video and also have a fully playlist</p>
<p>2) GreatStack in one short<p/>
</details>