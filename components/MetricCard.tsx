import { View, Text, StyleSheet } from 'react-native';
import { Heart, Activity } from 'lucide-react-native';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  type: 'heart' | 'oxygen';
}

export default function MetricCard({
  title,
  value,
  unit,
  type,
}: MetricCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        {type === 'heart' ? (
          <Heart size={32} color="#ef4444" strokeWidth={2} />
        ) : (
          <Activity size={32} color="#14b8a6" strokeWidth={2} />
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.unit}>{unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    flex: 1,
    marginHorizontal: 6,
  },
  iconContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  value: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  unit: {
    fontSize: 16,
    color: '#6b7280',
    marginLeft: 4,
  },
});
