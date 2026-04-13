import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Bell, Shield, Wifi, Moon } from 'lucide-react-native';

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoConnectEnabled, setAutoConnectEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [fallDetectionEnabled, setFallDetectionEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>

          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Bell size={20} color="#64748b" />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingLabel}>Notifications</Text>
                <Text style={styles.settingDescription}>
                  Receive health alerts
                </Text>
              </View>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#e2e8f0', true: '#99f6e4' }}
              thumbColor={notificationsEnabled ? '#14b8a6' : '#cbd5e1'}
            />
          </View>

          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Moon size={20} color="#64748b" />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingLabel}>Dark Mode</Text>
                <Text style={styles.settingDescription}>
                  Enable dark theme
                </Text>
              </View>
            </View>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              trackColor={{ false: '#e2e8f0', true: '#99f6e4' }}
              thumbColor={darkModeEnabled ? '#14b8a6' : '#cbd5e1'}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>IoT Devices</Text>

          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Wifi size={20} color="#64748b" />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingLabel}>Auto-Connect</Text>
                <Text style={styles.settingDescription}>
                  Automatically connect to devices
                </Text>
              </View>
            </View>
            <Switch
              value={autoConnectEnabled}
              onValueChange={setAutoConnectEnabled}
              trackColor={{ false: '#e2e8f0', true: '#99f6e4' }}
              thumbColor={autoConnectEnabled ? '#14b8a6' : '#cbd5e1'}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Safety</Text>

          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <Shield size={20} color="#64748b" />
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingLabel}>Fall Detection</Text>
                <Text style={styles.settingDescription}>
                  Alert on fall detection
                </Text>
              </View>
            </View>
            <Switch
              value={fallDetectionEnabled}
              onValueChange={setFallDetectionEnabled}
              trackColor={{ false: '#e2e8f0', true: '#99f6e4' }}
              thumbColor={fallDetectionEnabled ? '#14b8a6' : '#cbd5e1'}
            />
          </View>
        </View>

        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>ChronicCare AI v1.0.0</Text>
        </View>
      </ScrollView>
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
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '500',
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 12,
    color: '#6b7280',
  },
  versionContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  versionText: {
    fontSize: 12,
    color: '#94a3b8',
  },
});
