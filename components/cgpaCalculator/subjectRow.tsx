// components/SubjectRow.tsx
import React from "react";
import { Grade, Subject } from "./types";


interface SubjectRowProps {
  subject: Subject;
  onChange: (field: keyof Subject, value: string | number) => void;
}

const SubjectRow: React.FC<SubjectRowProps> = ({ subject, onChange }) => {
  return (
    <div className="flex space-x-4">
      <input
        type="text"
        value={subject.name}
        onChange={(e) => onChange("name", e.target.value)}
        placeholder="Subject Name"
        className="flex-1 p-2 border rounded"
      />
      <input
        type="number"
        value={subject.creditUnit || ""}
        onChange={(e) => onChange("creditUnit", Number(e.target.value))}
        placeholder="Credit Unit"
        className="w-24 p-2 border rounded"
      />
      <select
        value={subject.grade}
        onChange={(e) =>
          onChange("grade", e.target.value as keyof typeof Grade)
        }
        className="w-24 p-2 border rounded"
      >
        {Object.entries(Grade).map(([grade, value]) => (
          <option key={grade} value={grade}>
            {grade} ({value})
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubjectRow;
