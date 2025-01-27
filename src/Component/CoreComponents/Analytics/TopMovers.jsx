import React from 'react'

export default function TopMovers() {

    const [movers, setMovers] = useState(null);

    useEffect(() => {
        fetch("/TopMovers.json")
            .then((res) => res.json())
            .then((data) => {
                setMovers(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (!movers) {
        return (
            <div className="flex justify-center items-center h-96 text-gray-300">
                Loading . . .
            </div>
        );
    }

    return (
        <div>
            <h1>Top Movers</h1>
        </div>
    )
}
