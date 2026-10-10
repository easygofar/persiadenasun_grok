"use client"
import { useEffect, useRef, useState } from 'react';

type AparatOverlayPlayerProps = {
    videoId: string;
    length: number; // total length in seconds
};

const AparatPlayerOverlay: React.FC<AparatOverlayPlayerProps> = ({ videoId, length }) => {
    const [showOverlay, setShowOverlay] = useState(false)
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setShowOverlay(true);
        }, length * 1000);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [length]);

    return (
        <>
            <iframe
                className="w-full aspect-video z-10 md:rounded-2xl rounded overflow-hidde"
                src={`https://www.aparat.com/video/video/embed/videohash/${videoId}/vt/frame`}
                title="Aparat video player"
                allowFullScreen
            />

            {showOverlay && (
                <div
                    className="absolute left-0 right-0 top-0 bg-black opacity-30 bottom-[150px] z-10"

                />
            )}
        </>
    );
};

export default AparatPlayerOverlay;
