"use client";

import {
  formatRelativeDate,
  formatDateTime,
} from "@/src/utils/format-datetime";

type PostDateProps = {
  dateTime: string;
};

export default function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      className="text-slate-600 text-sm/tight"
      dateTime={dateTime}
      title={formatRelativeDate(dateTime)}
    >
      {formatDateTime(dateTime)}
    </time>
  );
}
