import dayjs from 'dayjs';
/**
 * Validation regex to validate form
 */
const pattern = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  mobile: /^([+]\d{2})?[6-9]\d{9}$/,
  iBanNumber: /^([A-Z]{2})\s*(\d{2})\s*([A-Z0-9\s]{1,30})$/,
  socialInsuranceNumber: /^\d{3}\..*$/,
} as const;

/**
 * Convert data to form data
 */
const makeFormData = (obj: any) => {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined) {
      if (typeof value === 'string') {
        formData.append(key, value);
      } else if (value instanceof File) {
        formData.append(key, value, value.name);
      } else if (value instanceof Blob) {
        formData.append(key, value, 'profil.ext');
      } else if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item instanceof File) {
            formData.append(key, item, item.name);
          } else if (typeof item === 'object' && item !== null) {
            formData.append(key, JSON.stringify(item));
          } else {
            formData.append(key, item);
          }
        });
      } else if (typeof value === 'object' && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    }
  });

  return formData;
};

/**
 * Check for pathname and remove last segment (to prevent conflicts do-not use route's with using alphabets and numbers in the app)
 */
function removeIdFromPath(path: any) {
  const segments = path.split('/');

  const lastSegment = segments[segments.length - 1];
  const isId = /^[0-9a-fA-F]+$/.test(lastSegment);

  if (isId) {
    segments.pop();
  }
  const newPath = segments.join('/');
  return newPath;
}

/**
 * Format long point value
 */
function formatDecimalNumber(number: number) {
  if (!Number.isFinite(number)) {
    return 'Invalid number';
  }

  if (Number.isInteger(number)) {
    return number;
  }

  let formattedNumber = parseFloat(number.toFixed(4));
  return formattedNumber;
}

/**
 * Get month and year
 */
const getMonthsAndYearsFromStartDate = (givenDate: any) => {
  const startDate = dayjs(givenDate);
  const today = dayjs();

  const monthsAndYears: any = [];

  let currentDate = startDate.startOf('month');

  while (currentDate.isBefore(today) || currentDate.isSame(today, 'month')) {
    const year = currentDate.year();
    const monthNumber = currentDate.month() + 1;
    const monthName = currentDate.format('MMMM');

    monthsAndYears.push({ year, monthNumber, monthName });

    currentDate = currentDate.add(1, 'month');
  }

  return monthsAndYears;
};

/**
 * Separate month and year
 */
const separateMonthAndYear = (monthAndYear: string) => {
  const date = dayjs(monthAndYear).toString();
  return {
    month: +dayjs(date).format('M'),
    year: +dayjs(date).format('YYYY'),
  };
};

/**
 * Calculate age from given date
 */

function calculateAge(birthDate: any) {
  const birth = new Date(birthDate);

  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  const monthDifference = today.getMonth() - birth.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}

/**
 * Calculate type of pensions based on given data
 */
const findPensionPercentageBasedOnAge = ({
  age,
  rule,
  isEmployer,
}: {
  age: number;
  rule: any;
  isEmployer: boolean;
}): number => {
  let pensionContribution = 0;
  const ruleType = isEmployer
    ? rule.employer_deduction?.pension_contribution_employer
    : rule.employee_contribution?.pension_contribution_employee;

  if (!ruleType) {
    return pensionContribution;
  }

  if (age >= 25 && age <= 34) {
    pensionContribution = ruleType.pension_25_34;
  } else if (age >= 35 && age <= 44) {
    pensionContribution = ruleType.pension_35_44;
  } else if (age >= 45 && age <= 54) {
    pensionContribution = ruleType.pension_45_54;
  } else if (age >= 55 && age <= 64) {
    pensionContribution = ruleType.pension_55_64;
  }

  return pensionContribution;
};

/**
 * Calculate & value
 */
const calculatePercentageOfNumber = (percentage: number, number: number) => {
  return Math.ceil((percentage / 100) * number);
};

/**
 * Return only 2 digits after point value
 */
const formatPointedValues = (num: number) => {
  return Number.isInteger(num) ? num : num?.toFixed(2);
};

/**
 * Transfer data on json format for users
 */
// const transformModifiedData = (data: any) => {
//   const result =
//     data?.length &&
//     Object.keys(data).map((year, index) => {
//       return {
//         id: index + 1,
//         year: parseInt(year),
//         activeUsers: data[year].activeUsers,
//         inactiveUsers: data[year].inactiveUsers,
//       };
//     });

//   return result;
// };
function transformModifiedData(data: any, key: any) {
  const transformedData: any = [];

  data &&
    Object?.values(data).forEach((entry: any, index) => {
      transformedData.push({
        id: index + 1,
        ...entry,
      });
    });

  return {
    [key]: transformedData,
  };
}

/**
 *
 * Generate any random color
 */
function getRandomColor() {
  const chartColors = [
    '#E08E52',
    '#D19A3B',
    '#339999',
    '#6F8F5F',
    '#B34747',
    '#CC6666',
    '#CCCC66',
  ];

  const randomIndex = Math.floor(Math.random() * chartColors.length);

  return chartColors[randomIndex];
}

export {
  pattern,
  makeFormData,
  removeIdFromPath,
  formatDecimalNumber,
  getMonthsAndYearsFromStartDate,
  separateMonthAndYear,
  calculateAge,
  findPensionPercentageBasedOnAge,
  calculatePercentageOfNumber,
  formatPointedValues,
  transformModifiedData,
  getRandomColor,
};
