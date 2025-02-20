'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Trading from "@/components/sections/inner-page/Trading";
import Process from "@/components/sections/home5/Process";
import Subscribe from "@/components/sections/home1/Subscribe";

export default function Markets_details() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [ws, setWs] = useState(null);
    const [marketData, setMarketData] = useState({});

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    // Grouping the subscribed symbols into the five categories.
    // NOTE: We now include crypto symbols (BTCUSDT & ETHUSDT) in the Share tab
    const shareSymbols = [
        "BTCUSDT_1m_Kline",
        "ETHUSDT_1m_Kline",
        // "AAPL.US_1m_Kline",
        // "MSFT.US_1m_Kline",
        // "GOOGL.US_1m_Kline",
        // "TSLA.US_1m_Kline",
        // "NVDA.US_1m_Kline",
    ];
    const forexSymbols = []; // no symbols for Forex in this grouping
    const indicesSymbols = [
        "EUSTX50_1m_Kline",
        "FRA40_1m_Kline",
        "UK100_1m_Kline",
        "JPN225_1m_Kline",
        "US30_1m_Kline",
        "AUS200_1m_Kline",
        "NAS100_1m_Kline",
        "HK50_1m_Kline",
        "US500_1m_Kline",
    ];
    const metalsSymbols = ["GOLD_1m_Kline", "Silver_1m_Kline"];
    const commoditiesSymbols = []; // no symbols for Commodities in this grouping

    // Mapping for category icons (adjust as needed)
    const categoryIcons = {
        cryptocurrency: "assets/images/icons/icon-9.png",
        forex: "assets/images/icons/icon-9.png",
        indices: "assets/images/icons/icon-12.png",
        metals: "assets/images/icons/icon-10.png",
        commodities: "assets/images/icons/icon-11.png",
    };

    // New mapping: Mapping for symbol specific icons.
    const symbolIcons = {
        "BTCUSDT_1m_Kline": "assets/images/icons/icon-9.png",
        "ETHUSDT_1m_Kline": "assets/images/icons/icon-10.png",
        "GOLD_1m_Kline": "assets/images/icons/xauusd.svg",
        "Silver_1m_Kline": "assets/images/icons/xagusd.svg",
        "AAPL.US_1m_Kline": "assets/images/icons/currency.jpg",
        "MSFT.US_1m_Kline": "assets/images/icons/currency.jpg",
        "GOOGL.US_1m_Kline": "assets/images/icons/currency.jpg",
        "TSLA.US_1m_Kline": "assets/images/icons/currency.jpg",
        "NVDA.US_1m_Kline": "assets/images/icons/currency.jpg",
        "EUSTX50_1m_Kline": "assets/images/icons/hk50.svg",
        "FRA40_1m_Kline": "assets/images/icons/fra40.svg",
        "UK100_1m_Kline": "assets/images/icons/uk100.svg",
        "JPN225_1m_Kline": "assets/images/icons/jpn225.svg",
        "US30_1m_Kline": "assets/images/icons/us30.svg",
        "AUS200_1m_Kline": "assets/images/icons/aus200.svg",
        "NAS100_1m_Kline": "assets/images/icons/nas100.svg",
        "HK50_1m_Kline": "assets/images/icons/hk50.svg",
        "US500_1m_Kline": "assets/images/icons/sp500.svg",
    };

    useEffect(() => {
        let socket;
        let heartbeatInterval;

        const connectWebSocket = () => {
            socket = new WebSocket("wss://api.tedafx.com/ws?token=1739547076090");

            socket.onopen = () => {
                console.log("WebSocket connection established");

                // Send heartbeat every 10 seconds
                heartbeatInterval = setInterval(() => {
                    if (socket.readyState === WebSocket.OPEN) {
                        socket.send(JSON.stringify({ action: "heartbeat" }));
                        console.log("Sent heartbeat");
                    }
                }, 10000);

                // Send subscription request after connection is established
                socket.send(
                    JSON.stringify({
                        action: "subscribe",
                        symbol: [
                            "BTCUSDT_1m_Kline",
                            "ETHUSDT_1m_Kline",
                            "GOLD_1m_Kline",
                            "Silver_1m_Kline",
                            "AAPL.US_1m_Kline",
                            "MSFT.US_1m_Kline",
                            "GOOGL.US_1m_Kline",
                            "TSLA.US_1m_Kline",
                            "NVDA.US_1m_Kline",
                            "EUSTX50_1m_Kline",
                            "FRA40_1m_Kline",
                            "UK100_1m_Kline",
                            "JPN225_1m_Kline",
                            "US30_1m_Kline",
                            "AUS200_1m_Kline",
                            "NAS100_1m_Kline",
                            "HK50_1m_Kline",
                            "US500_1m_Kline",
                        ],
                    })
                );
            };

            socket.onmessage = (event) => {
                try {
                    const parsed = JSON.parse(event.data);
                    console.log("Received WebSocket data:", parsed);
                    if (parsed.code === 200 && parsed.data) {
                        const d = parsed.data;
                        // Build the symbol key to match the subscription string.
                        const symbolKey = `${d.code}_${d.interval}_Kline`;
                        setMarketData((prev) => ({ ...prev, [symbolKey]: d }));
                    }
                } catch (error) {
                    console.error("Error parsing WebSocket message:", error);
                }
            };

            socket.onerror = (error) => {
                console.error("WebSocket error:", error);
            };

            socket.onclose = () => {
                console.log("WebSocket connection closed");
                clearInterval(heartbeatInterval);
                // Try reconnecting after 5 seconds
                setTimeout(() => {
                    console.log("Reconnecting WebSocket...");
                    connectWebSocket();
                }, 5000);
            };

            setWs(socket);
        };

        connectWebSocket();

        return () => {
            if (socket) {
                socket.close();
                clearInterval(heartbeatInterval);
            }
        };
    }, []);

    // Helper function to render table rows given an array of symbols and the category key for icons
    const renderRows = (symbols, categoryKey) => {
        return symbols.map((symbol) => {
            const data = marketData[symbol];
            if (!data) {
                return (
                    <tr key={symbol}>
                        <td>
                            <div className="single-item">
                                <img src={symbolIcons[symbol] || "assets/images/icons/default.png"} alt="" />
                                {/* Only display the symbol code part */}
                                <span>{symbol.split("_")[0]}</span>
                            </div>
                        </td>
                        <td colSpan="4">Loading...</td>
                    </tr>
                );
            }
            // Use the close price as the "Bid"
            const bid = data.close;
            // Simulate an "Ask" price by adding a small margin (0.1% in this example)
            const ask = data.close * 1.001;
            // Calculate the percentage change from open to close
            const change = ((data.close - data.open) / data.open) * 100;
            const changeClass = change >= 0 ? "upper" : "lower";
            const actionIcon =
                change >= 0
                    ? "assets/images/icons/chart-1.png"
                    : "assets/images/icons/chart-2.png";
            const actionIconClass = change >= 0 ? "icon-08" : "icon-09";

            return (
                <tr key={symbol}>
                    <td>
                        <div className="single-item">
                            <img src={symbolIcons[symbol] || "assets/images/icons/default.png"} alt="" style={{ borderRadius: "50%", width: "24px", height: "24px" }} />
                            <span>{data.code === "Silver" ? "XAGUSD" : data.code === "GOLD" ? "XAUUSD" : data.code}</span>
                        </div>
                    </td>
                    <td>{bid.toFixed(2)}</td>
                    <td>{ask.toFixed(2)}</td>
                    <td className={changeClass}>
                        <div className="single-item">
                            <img src={actionIcon} alt="" />
                            <i className={actionIconClass}></i>
                        </div>
                    </td>
                    <td className={changeClass}>
                        {change >= 0 ? `+${change.toFixed(2)}%` : `${change.toFixed(2)}%`}
                    </td>
                </tr>
            );
        });
    };

    return (
        <div className="boxed_wrapper">
            <Layout
                headerStyle={3}
                footerStyle={1}
                breadcrumbTitle="Markets Details"
            >
                <section className="trading-style-five pt_90 pb_100">
                    <div className="auto-container">
                        <div className="sec-title centred pb_60">
                            <span className="sub-title mb_14">Trade Now</span>
                            <h2>Market Spreads and Swaps</h2>
                        </div>
                        <div className="inner-container">
                            <div className="tabs-box">
                                <ul className="tab-btns tab-buttons shop-tab-btn clearfix">
                                    <li
                                        onClick={() => handleOnClick(1)}
                                        className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}
                                    >
                                        Cryptocurrency
                                    </li>
                                    {/* <li
                                        onClick={() => handleOnClick(2)}
                                        className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}
                                    >
                                        Forex
                                    </li> */}
                                    <li
                                        onClick={() => handleOnClick(3)}
                                        className={activeIndex === 3 ? "p-tab-btn active-btn" : "tab-btn"}
                                    >
                                        Indices
                                    </li>
                                    <li
                                        onClick={() => handleOnClick(4)}
                                        className={activeIndex === 4 ? "p-tab-btn active-btn" : "tab-btn"}
                                    >
                                        Metals
                                    </li>
                                    {/* <li
                                        onClick={() => handleOnClick(5)}
                                        className={activeIndex === 5 ? "p-tab-btn active-btn" : "tab-btn"}
                                    >
                                        Commodities
                                    </li> */}
                                </ul>
                                <div className="tabs-content">
                                    {/* Share Tab */}
                                    <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"}>
                                        <div className="table-outer">
                                            <table className="trading-table">
                                                <thead>
                                                    <tr>
                                                        <td>Markets</td>
                                                        <td>Bid</td>
                                                        <td>Ask</td>
                                                        <td>Action</td>
                                                        <td>Spread</td>
                                                    </tr>
                                                </thead>
                                                <tbody>{renderRows(shareSymbols, "cryptocurrency")}</tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* Forex Tab */}
                                    <div
                                        className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"}
                                        id="forex"
                                    >
                                        <div className="table-outer">
                                            <table className="trading-table">
                                                <thead>
                                                    <tr>
                                                        <td>Markets</td>
                                                        <td>Bid</td>
                                                        <td>Ask</td>
                                                        <td>Action</td>
                                                        <td>Spread</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {forexSymbols.length > 0 ? (
                                                        renderRows(forexSymbols, "forex")
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="5">No Forex data available</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* Indices Tab */}
                                    <div
                                        className={activeIndex === 3 ? "tab p-tab active-tab" : "tab"}
                                        id="indices"
                                    >
                                        <div className="table-outer">
                                            <table className="trading-table">
                                                <thead>
                                                    <tr>
                                                        <td>Markets</td>
                                                        <td>Bid</td>
                                                        <td>Ask</td>
                                                        <td>Action</td>
                                                        <td>Spread</td>
                                                    </tr>
                                                </thead>
                                                <tbody>{renderRows(indicesSymbols, "indices")}</tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* Metals Tab */}
                                    <div
                                        className={activeIndex === 4 ? "tab p-tab active-tab" : "tab"}
                                        id="metals"
                                    >
                                        <div className="table-outer">
                                            <table className="trading-table">
                                                <thead>
                                                    <tr>
                                                        <td>Markets</td>
                                                        <td>Bid</td>
                                                        <td>Ask</td>
                                                        <td>Action</td>
                                                        <td>Spread</td>
                                                    </tr>
                                                </thead>
                                                <tbody>{renderRows(metalsSymbols, "metals")}</tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* Commodities Tab */}
                                    <div
                                        className={activeIndex === 5 ? "tab p-tab active-tab" : "tab"}
                                        id="commodities"
                                    >
                                        <div className="table-outer">
                                            <table className="trading-table">
                                                <thead>
                                                    <tr>
                                                        <td>Markets</td>
                                                        <td>Bid</td>
                                                        <td>Ask</td>
                                                        <td>Action</td>
                                                        <td>Spread</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {commoditiesSymbols.length > 0 ? (
                                                        renderRows(commoditiesSymbols, "commodities")
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="5">No Commodities data available</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <Trading /> */}
                <Process />
                <Subscribe />
            </Layout>
        </div>
    );
}
