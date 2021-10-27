export default function () {
    return <button onClick={() => { alert("just kidding not working"); const blah = {}; blah.blah(); }}>Alert Button</button>
}