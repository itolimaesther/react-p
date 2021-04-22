import React, {useState} from 'react'

function MultiCounter() {

    const [counts, setCounts] = useState({
        countA: 0,
        countB: 0
    })

    const incA = () => {
        setCounts({
            ...counts,
            countA: counts.countA + 1
        })
    }

    const incB = () => {
        setCounts({
            ...counts,
            countB: counts.countA + 1
        })
    }

    const badIncA = () => {
        setCounts({
            countA: counts.countA + 1
            })
    }

    return (
        <div>
            <div>A: {counts.countA}</div>
            <div>B: {counts.countB}</div>

            <button onClick={incA}>
Increment A
</button>
<button onClick={incB}>
Increment B
</button>
<button onClick={badIncA}>
Increment A Badly
</button>


        </div>
    )
}

export default MultiCounter
