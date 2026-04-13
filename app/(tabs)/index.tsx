import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AlertTriangle } from 'lucide-react-native';
import MetricCard from '@/components/MetricCard';
import HealthScoreCircle from '@/components/HealthScoreCircle';

export default function Dashboard() {
  const [heartRate, setHeartRate] = useState('72');
  const [spO2, setSpO2] = useState('98');
  const [healthScore, setHealthScore] = useState(85);
  const [showFallAlert, setShowFallAlert] = useState(false);

  useEffect(() => {
    const simulateIoTData = setInterval(() => {
      const randomHeartRate = Math.floor(Math.random() * 20 + 65);
      const randomSpO2 = Math.floor(Math.random() * 5 + 95);
      const randomScore = Math.floor(Math.random() * 30 + 70);

      setHeartRate(randomHeartRate.toString());
      setSpO2(randomSpO2.toString());
      setHealthScore(randomScore);

      const fallDetected = Math.random() < 0.05;
      if (fallDetected) {
        setShowFallAlert(true);
      }
    }, 5000);

    return () => clearInterval(simulateIoTData);
  }, []);

  const handleSOSPress = () => {
    Alert.alert(
      'Emergency SOS',
      'Emergency services will be contacted immediately.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            Alert.alert('SOS Sent', 'Help is on the way!');
          },
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>ChronicCare AI</Text>
          <Text style={styles.headerSubtitle}>
            Real-time Health Monitoring
          </Text>
        </View>

        <View style={styles.metricsContainer}>
          <MetricCard
            title="Heart Rate"
            value={heartRate}
            unit="bpm"
            type="heart"
          />
          <MetricCard title="SpO2" value={spO2} unit="%" type="oxygen" />
        </View>

        <View style={styles.healthScoreContainer}>
          <HealthScoreCircle score={healthScore} />
        </View>

        <TouchableOpacity
          style={styles.sosButton}
          onPress={handleSOSPress}
          activeOpacity={0.8}>
          <AlertTriangle size={32} color="#ffffff" strokeWidth={2.5} />
          <Text style={styles.sosText}>SOS</Text>
        </TouchableOpacity>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Monitoring Status</Text>
          <View style={styles.statusRow}>
            <View style={styles.statusIndicator} />
            <Text style={styles.statusText}>Connected to IoT devices</Text>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={showFallAlert}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowFallAlert(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.alertIconContainer}>
              <AlertTriangle size={48} color="#ef4444" strokeWidth={2} />
            </View>
            <Text style={styles.alertTitle}>FALL DETECTED!</Text>
            <Text style={styles.alertMessage}>
              A fall has been detected. Are you okay?
            </Text>
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalButton, styles.okButton]}
                onPress={() => setShowFallAlert(false)}>
                <Text style={styles.okButtonText}>I'm Okay</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, styles.helpButton]}
                onPress={() => {
                  setShowFallAlert(false);
                  handleSOSPress();
                }}>
                <Text style={styles.helpButtonText}>Need Help</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdfa',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#14b8a6',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748b',
  },
  metricsContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  healthScoreContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sosButton: {
    backgroundColor: '#ef4444',
    borderRadius: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ef4444',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    marginBottom: 24,
  },
  sosText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  infoSection: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10b981',
    marginRight: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#6b7280',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    maxWidth: '85%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
  },
  alertIconContainer: {
    marginBottom: 16,
  },
  alertTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ef4444',
    marginBottom: 12,
  },
  alertMessage: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    minWidth: 120,
  },
  okButton: {
    backgroundColor: '#14b8a6',
  },
  okButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  helpButton: {
    backgroundColor: '#ef4444',
  },
  helpButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
