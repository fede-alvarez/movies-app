import { Skeleton } from "@mui/material";

export const MovieItemSkeleton = (key) => {
    return (<div key={key} className="flex flex-col gap-1 animate-fade-in-up">
        <Skeleton variant="text" sx={{ bgcolor: '#274a75' }} animation="wave" width={170} />
        <Skeleton variant="rounded" sx={{ bgcolor: '#274a75' }} animation="wave" width={170} height={250} />
    </div>);
}