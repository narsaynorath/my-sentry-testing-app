export default function () {
    return <button onClick={() => { throw new Error("Borked click") }}>Borked Click</button>
}