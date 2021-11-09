import './_Distance.scss';

const Distance = () => {
    return (
        <section className="distance">
            <div className={["distance-text"]}>
                <h2>Distances</h2>
            </div>
            <div className={["distance-all"]}>
                <div className={["distance-all-transportation"]}>
                    <p>airport: 12km</p>
                    <p>bus station: 300m</p>
                    <p>train station: 3km</p>

                </div>
                <div className={["distance-all-hospital"]}>
                    <p>hospital or emergency: 5km</p>
                    <p>pharmacy</p>
                    <p>post office: 500m</p>
                    <p>grocery store: 200m</p>
                </div>
                <div className={["distance-all-sea"]}>
                    <p>beach: 2km</p>
                    <p>ATM: 600m</p>
                    <p>gas station: 1km</p>
                </div>
            </div>
        </section>
    )
}

export default Distance;