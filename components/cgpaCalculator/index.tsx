'use client'
// components/CGPACalculator.tsx
import React, { useState, useCallback } from "react";
import { Subject, Grade } from "./types";
import SubjectRow from "./subjectRow";

const CGPACalculator: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: "", creditUnit: 0, grade: "A" },
  ]);
  const [cgpa, setCGPA] = useState<number | null>(null);

  const addSubject = useCallback(() => {
    setSubjects((prev) => [...prev, { name: "", creditUnit: 0, grade: "A" }]);
  }, []);

  const updateSubject = useCallback(
    (index: number, field: keyof Subject, value: string | number) => {
      setSubjects((prev) =>
        prev.map((subject, i) =>
          i === index ? { ...subject, [field]: value } : subject
        )
      );
    },
    []
  );

  const calculateCGPA = useCallback(() => {
    const totalCreditUnits = subjects.reduce(
      (sum, subject) => sum + subject.creditUnit,
      0
    );
    const totalGradePoints = subjects.reduce((sum, subject) => {
      const gradeValue = Grade[subject.grade];
      return sum + subject.creditUnit * gradeValue;
    }, 0);

    const calculatedCGPA = totalGradePoints / totalCreditUnits;
    setCGPA(Number(calculatedCGPA.toFixed(2)));
  }, [subjects]);

  return (
    <div className="w-full md:w-3/5 mx-auto my-40 p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Calculate your CGPA here</h1>
      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <SubjectRow
            key={index}
            subject={subject}
            onChange={(field, value) => updateSubject(index, field, value)}
          />
        ))}
      </div>
      <button
        onClick={addSubject}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Subject
      </button>
      <button
        onClick={calculateCGPA}
        className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Calculate CGPA
      </button>
      {cgpa !== null && (
        <div className="mt-4 text-xl font-bold">Your CGPA: {cgpa}</div>
      )}
    </div>
  );
};

export default CGPACalculator;
