// Mock data for the Strategic Health Longevity Dashboard

export type MetricStatus = 'normal' | 'warning' | 'critical' | 'neutral' | 'none';

export interface Metric {
  id: string;
  group: string;
  name: string;
  lastValue: number | null;
  unit: string;
  lastCheckIn: string | null;
  status: MetricStatus;
  about: string;
  risk: string;
  howToImprove: string;
  normalRange: { min: number; max: number };
  warningRange: { min: number; max: number };
  enabled: boolean;
}

export interface MetricGroup {
  id: string;
  name: string;
  icon: string;
  metrics: Metric[];
}

export interface TrendDataPoint {
  date: string;
  value: number;
}

export const metricGroups: MetricGroup[] = [
  {
    id: 'sleep',
    name: 'Sleep',
    icon: 'Moon',
    metrics: [
      {
        id: 'sleep-duration',
        group: 'Sleep',
        name: 'Sleep Duration',
        lastValue: 7.2,
        unit: 'hours',
        lastCheckIn: '2025-12-31',
        status: 'normal',
        about: 'Total hours of sleep per night',
        risk: 'Poor sleep affects cognitive function, immune health, and longevity',
        howToImprove: 'Maintain consistent sleep schedule, limit screen time before bed',
        normalRange: { min: 7, max: 9 },
        warningRange: { min: 6, max: 10 },
        enabled: true,
      },
      {
        id: 'sleep-quality',
        group: 'Sleep',
        name: 'Sleep Quality Score',
        lastValue: 82,
        unit: '%',
        lastCheckIn: '2025-12-31',
        status: 'normal',
        about: 'Overall quality rating based on sleep stages',
        risk: 'Low quality sleep reduces recovery and mental clarity',
        howToImprove: 'Optimize bedroom temperature, reduce caffeine intake',
        normalRange: { min: 80, max: 100 },
        warningRange: { min: 60, max: 80 },
        enabled: true,
      },
      {
        id: 'deep-sleep',
        group: 'Sleep',
        name: 'Deep Sleep',
        lastValue: 1.5,
        unit: 'hours',
        lastCheckIn: '2025-12-31',
        status: 'warning',
        about: 'Time spent in deep restorative sleep',
        risk: 'Insufficient deep sleep impairs physical recovery',
        howToImprove: 'Exercise regularly, avoid alcohol before bed',
        normalRange: { min: 1.5, max: 2.5 },
        warningRange: { min: 1, max: 1.5 },
        enabled: true,
      },
      {
        id: 'rem-sleep',
        group: 'Sleep',
        name: 'REM Sleep',
        lastValue: 1.8,
        unit: 'hours',
        lastCheckIn: '2025-12-31',
        status: 'normal',
        about: 'Time spent in REM sleep stage',
        risk: 'Low REM affects memory consolidation and learning',
        howToImprove: 'Reduce stress, maintain consistent wake times',
        normalRange: { min: 1.5, max: 2.5 },
        warningRange: { min: 1, max: 1.5 },
        enabled: true,
      },
    ],
  },
  {
    id: 'physical',
    name: 'Physical Activity',
    icon: 'Activity',
    metrics: [
      {
        id: 'steps',
        group: 'Physical Activity',
        name: 'Daily Steps',
        lastValue: 8500,
        unit: 'steps',
        lastCheckIn: '2025-12-31',
        status: 'normal',
        about: 'Average daily step count',
        risk: 'Sedentary lifestyle increases cardiovascular risk',
        howToImprove: 'Take walking breaks, use stairs instead of elevator',
        normalRange: { min: 8000, max: 15000 },
        warningRange: { min: 5000, max: 8000 },
        enabled: true,
      },
      {
        id: 'active-minutes',
        group: 'Physical Activity',
        name: 'Active Minutes',
        lastValue: 45,
        unit: 'min/day',
        lastCheckIn: '2025-12-31',
        status: 'normal',
        about: 'Minutes of moderate to vigorous activity',
        risk: 'Insufficient activity affects metabolic health',
        howToImprove: 'Schedule dedicated exercise time daily',
        normalRange: { min: 30, max: 90 },
        warningRange: { min: 15, max: 30 },
        enabled: true,
      },
      {
        id: 'vo2max',
        group: 'Physical Activity',
        name: 'VO2 Max',
        lastValue: 42,
        unit: 'mL/kg/min',
        lastCheckIn: '2025-11-15',
        status: 'warning',
        about: 'Maximum oxygen uptake during exercise',
        risk: 'Lower VO2 max associated with higher mortality risk',
        howToImprove: 'Include high-intensity interval training',
        normalRange: { min: 45, max: 60 },
        warningRange: { min: 35, max: 45 },
        enabled: true,
      },
      {
        id: 'strength-sessions',
        group: 'Physical Activity',
        name: 'Strength Sessions',
        lastValue: 2,
        unit: 'per week',
        lastCheckIn: '2025-12-31',
        status: 'warning',
        about: 'Weekly resistance training sessions',
        risk: 'Muscle loss accelerates with age without strength training',
        howToImprove: 'Add 1-2 more strength sessions per week',
        normalRange: { min: 3, max: 5 },
        warningRange: { min: 1, max: 3 },
        enabled: true,
      },
    ],
  },
  {
    id: 'nutrition',
    name: 'Nutrition',
    icon: 'Apple',
    metrics: [
      {
        id: 'protein-intake',
        group: 'Nutrition',
        name: 'Protein Intake',
        lastValue: 120,
        unit: 'g/day',
        lastCheckIn: '2025-12-30',
        status: 'normal',
        about: 'Daily protein consumption',
        risk: 'Inadequate protein affects muscle maintenance',
        howToImprove: 'Include protein with every meal',
        normalRange: { min: 100, max: 180 },
        warningRange: { min: 60, max: 100 },
        enabled: true,
      },
      {
        id: 'fiber-intake',
        group: 'Nutrition',
        name: 'Fiber Intake',
        lastValue: 22,
        unit: 'g/day',
        lastCheckIn: '2025-12-30',
        status: 'warning',
        about: 'Daily fiber consumption',
        risk: 'Low fiber affects gut health and digestion',
        howToImprove: 'Increase vegetables, legumes, and whole grains',
        normalRange: { min: 25, max: 40 },
        warningRange: { min: 15, max: 25 },
        enabled: true,
      },
      {
        id: 'water-intake',
        group: 'Nutrition',
        name: 'Water Intake',
        lastValue: 2.5,
        unit: 'L/day',
        lastCheckIn: '2025-12-31',
        status: 'normal',
        about: 'Daily water consumption',
        risk: 'Dehydration affects energy and cognitive function',
        howToImprove: 'Keep water bottle nearby, set reminders',
        normalRange: { min: 2, max: 4 },
        warningRange: { min: 1.5, max: 2 },
        enabled: true,
      },
    ],
  },
  {
    id: 'micronutrients',
    name: 'Micronutrients',
    icon: 'Pill',
    metrics: [
      {
        id: 'vitamin-d',
        group: 'Micronutrients',
        name: 'Vitamin D',
        lastValue: 45,
        unit: 'ng/mL',
        lastCheckIn: '2025-10-15',
        status: 'normal',
        about: 'Blood vitamin D level',
        risk: 'Deficiency affects bone health and immunity',
        howToImprove: 'Sun exposure, supplementation, fatty fish',
        normalRange: { min: 40, max: 80 },
        warningRange: { min: 20, max: 40 },
        enabled: true,
      },
      {
        id: 'vitamin-b12',
        group: 'Micronutrients',
        name: 'Vitamin B12',
        lastValue: 550,
        unit: 'pg/mL',
        lastCheckIn: '2025-10-15',
        status: 'normal',
        about: 'Blood vitamin B12 level',
        risk: 'Deficiency causes fatigue and neurological issues',
        howToImprove: 'Animal products, fortified foods, supplements',
        normalRange: { min: 400, max: 1000 },
        warningRange: { min: 200, max: 400 },
        enabled: true,
      },
      {
        id: 'iron',
        group: 'Micronutrients',
        name: 'Iron (Ferritin)',
        lastValue: 85,
        unit: 'ng/mL',
        lastCheckIn: '2025-10-15',
        status: 'normal',
        about: 'Iron storage level in blood',
        risk: 'Low iron causes anemia and fatigue',
        howToImprove: 'Red meat, legumes, vitamin C with iron-rich foods',
        normalRange: { min: 50, max: 150 },
        warningRange: { min: 20, max: 50 },
        enabled: true,
      },
      {
        id: 'magnesium',
        group: 'Micronutrients',
        name: 'Magnesium',
        lastValue: null,
        unit: 'mg/dL',
        lastCheckIn: null,
        status: 'none',
        about: 'Blood magnesium level',
        risk: 'Deficiency affects sleep, muscle, and heart function',
        howToImprove: 'Nuts, seeds, dark chocolate, leafy greens',
        normalRange: { min: 1.7, max: 2.2 },
        warningRange: { min: 1.5, max: 1.7 },
        enabled: true,
      },
    ],
  },
  {
    id: 'blood',
    name: 'Blood Markers',
    icon: 'Droplet',
    metrics: [
      {
        id: 'glucose',
        group: 'Blood Markers',
        name: 'Fasting Glucose',
        lastValue: 92,
        unit: 'mg/dL',
        lastCheckIn: '2025-10-15',
        status: 'normal',
        about: 'Blood sugar after fasting',
        risk: 'High levels indicate diabetes risk',
        howToImprove: 'Reduce refined carbs, exercise regularly',
        normalRange: { min: 70, max: 100 },
        warningRange: { min: 100, max: 126 },
        enabled: true,
      },
      {
        id: 'hba1c',
        group: 'Blood Markers',
        name: 'HbA1c',
        lastValue: 5.4,
        unit: '%',
        lastCheckIn: '2025-10-15',
        status: 'normal',
        about: '3-month average blood sugar',
        risk: 'Elevated levels indicate pre-diabetes or diabetes',
        howToImprove: 'Dietary changes, weight management',
        normalRange: { min: 4, max: 5.7 },
        warningRange: { min: 5.7, max: 6.5 },
        enabled: true,
      },
      {
        id: 'ldl',
        group: 'Blood Markers',
        name: 'LDL Cholesterol',
        lastValue: 110,
        unit: 'mg/dL',
        lastCheckIn: '2025-10-15',
        status: 'warning',
        about: 'Low-density lipoprotein cholesterol',
        risk: 'High LDL increases cardiovascular disease risk',
        howToImprove: 'Reduce saturated fats, increase fiber',
        normalRange: { min: 0, max: 100 },
        warningRange: { min: 100, max: 130 },
        enabled: true,
      },
      {
        id: 'hdl',
        group: 'Blood Markers',
        name: 'HDL Cholesterol',
        lastValue: 58,
        unit: 'mg/dL',
        lastCheckIn: '2025-10-15',
        status: 'normal',
        about: 'High-density lipoprotein cholesterol',
        risk: 'Low HDL increases cardiovascular risk',
        howToImprove: 'Exercise, healthy fats, avoid trans fats',
        normalRange: { min: 50, max: 100 },
        warningRange: { min: 40, max: 50 },
        enabled: true,
      },
      {
        id: 'triglycerides',
        group: 'Blood Markers',
        name: 'Triglycerides',
        lastValue: 125,
        unit: 'mg/dL',
        lastCheckIn: '2025-10-15',
        status: 'normal',
        about: 'Blood fat levels',
        risk: 'High levels increase heart disease risk',
        howToImprove: 'Limit sugar and alcohol, omega-3 fatty acids',
        normalRange: { min: 0, max: 150 },
        warningRange: { min: 150, max: 200 },
        enabled: true,
      },
    ],
  },
  {
    id: 'body',
    name: 'Body Composition',
    icon: 'Scale',
    metrics: [
      {
        id: 'weight',
        group: 'Body Composition',
        name: 'Weight',
        lastValue: 75,
        unit: 'kg',
        lastCheckIn: '2025-12-31',
        status: 'neutral',
        about: 'Current body weight',
        risk: 'Track trends rather than absolute values',
        howToImprove: 'Focus on body composition, not just weight',
        normalRange: { min: 60, max: 90 },
        warningRange: { min: 50, max: 100 },
        enabled: true,
      },
      {
        id: 'body-fat',
        group: 'Body Composition',
        name: 'Body Fat',
        lastValue: 18,
        unit: '%',
        lastCheckIn: '2025-12-15',
        status: 'normal',
        about: 'Percentage of body fat',
        risk: 'High body fat increases metabolic disease risk',
        howToImprove: 'Strength training, adequate protein, calorie balance',
        normalRange: { min: 10, max: 20 },
        warningRange: { min: 20, max: 25 },
        enabled: true,
      },
      {
        id: 'muscle-mass',
        group: 'Body Composition',
        name: 'Muscle Mass',
        lastValue: 35,
        unit: 'kg',
        lastCheckIn: '2025-12-15',
        status: 'normal',
        about: 'Total skeletal muscle mass',
        risk: 'Muscle loss accelerates aging and reduces metabolism',
        howToImprove: 'Resistance training, adequate protein intake',
        normalRange: { min: 30, max: 45 },
        warningRange: { min: 25, max: 30 },
        enabled: true,
      },
    ],
  },
];

export const getAllMetrics = (): Metric[] => {
  return metricGroups.flatMap((group) => group.metrics);
};

export const getMetricsByStatus = (status: MetricStatus): Metric[] => {
  return getAllMetrics().filter((m) => m.status === status);
};

export const getSummaryStats = () => {
  const allMetrics = getAllMetrics();
  return {
    total: allMetrics.length,
    normal: allMetrics.filter((m) => m.status === 'normal').length,
    warning: allMetrics.filter((m) => m.status === 'warning').length,
    critical: allMetrics.filter((m) => m.status === 'critical').length,
    neutral: allMetrics.filter((m) => m.status === 'neutral').length,
    none: allMetrics.filter((m) => m.status === 'none').length,
  };
};

export const generateTrendData = (metricId: string, months: number = 12): TrendDataPoint[] => {
  const data: TrendDataPoint[] = [];
  const now = new Date();
  
  for (let i = months - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setMonth(date.getMonth() - i);
    
    // Generate somewhat realistic random data
    const baseValue = 50 + Math.random() * 30;
    const trend = (months - i) * 0.5;
    const noise = (Math.random() - 0.5) * 10;
    
    data.push({
      date: date.toISOString().split('T')[0],
      value: Math.round((baseValue + trend + noise) * 10) / 10,
    });
  }
  
  return data;
};

export const userProfile = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  dateOfBirth: '1985-06-15',
  gender: 'Male',
  height: 178,
  weight: 75,
  activityLevel: 'Moderate',
  memberSince: '2024-01-15',
};
