import * as Sentry from '@sentry/react';
import { SpanStatus } from '@sentry/tracing';

export default function () {
    const handleClick = async () => {
        const transaction = Sentry.startTransaction({ name: "long-click" });

        Sentry.getCurrentHub().configureScope(scope => scope.setSpan(transaction));

        const span = transaction.startChild({
            op: "waiting",
            description: "waiting randomly before finishing"
        })

        try {
            console.log("starting")
            const timeToWait = Math.floor(Math.random() * 5) * 1000
            await new Promise(resolve => {
                setTimeout(resolve, timeToWait)
            })
            span.setStatus(SpanStatus.Ok)
        } catch (err) {
            span.setStatus(SpanStatus.UnknownError)
            throw err;
        } finally {
            console.log("done")
            span.finish();
            transaction.finish();
        }

    }

    return <button onClick={handleClick}>This button triggers an event recorded by a custom instrumentation</button>
}