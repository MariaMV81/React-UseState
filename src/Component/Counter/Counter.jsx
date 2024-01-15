export default function Counter({ count, setCount }) {
    function handleCounter() {
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={handleCounter}>Incrementar counter</button>
            <p>El valor de count es {count}</p>
        </>
    );
}