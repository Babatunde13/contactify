export default function Offline() {
  
  return (
    <>
        <h1>You are offline</h1>
        <p>Click the button below to try reloading.</p>
        <button type="button" onClick={() => {window.location.reload();}}> Reload</button>
    </>
  )
}