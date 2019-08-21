import React from 'react'

const Rank = ({ name, entries }) => {
    return (
        <section>
            <div className="white f3">
                {`${name}, your current entry count is...`}
            </div>
            <div className="white f1">
                {entries}
            </div>
        </section>
    )
}

export default Rank;