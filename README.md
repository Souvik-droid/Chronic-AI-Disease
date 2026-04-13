# ChronicCare AI - IoT Health Monitoring Dashboard

A modern React Native Expo application for monitoring Diabetes, Hypertension, and Asthma through IoT devices.

## Features

- **Real-time Health Metrics**: Monitor Heart Rate and SpO2 levels in large, easy-to-read cards
- **Health Score**: Visual health score indicator (0-100) with color-coded status
- **Emergency SOS Button**: Quick access to emergency services with confirmation dialog
- **Fall Detection**: Automatic alert system when fall is detected (FALL:1)
- **Medical-Themed Design**: Clean teal and white color scheme with rounded corners
- **Tab Navigation**: Easy access to Dashboard, Profile, and Settings

## Native Features

This app includes native modules and requires proper configuration:

- Camera access for scanning medical documents and IoT device QR codes
- Bluetooth for connecting to medical IoT devices
- Location services for emergency features

## Building with EAS

### Prerequisites

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Login to Expo:
```bash
eas login
```

3. Configure your project:
```bash
eas build:configure
```

### Development Build

Create a development build for testing:

```bash
eas build --profile development --platform ios
eas build --profile development --platform android
```

### Production Build

Create a production build:

```bash
eas build --profile production --platform ios
eas build --profile production --platform android
```

## Tech Stack

- React Native with Expo SDK
- Expo Router for navigation
- react-native-svg for custom graphics
- Lucide React Native for icons
- TypeScript for type safety

## Project Structure

```
app/
├── (tabs)/
│   ├── _layout.tsx      # Tab navigation configuration
│   ├── index.tsx        # Main dashboard screen
│   ├── profile.tsx      # Patient profile screen
│   └── settings.tsx     # Settings screen
├── _layout.tsx          # Root layout
└── +not-found.tsx       # 404 screen

components/
├── HealthScoreCircle.tsx # Circular health score indicator
└── MetricCard.tsx        # Reusable metric card component
```

## Simulated IoT Data

The dashboard currently simulates IoT data with random updates every 5 seconds:
- Heart Rate: 65-85 bpm
- SpO2: 95-100%
- Health Score: 70-100
- Fall Detection: 5% chance per update cycle

## Future Enhancements

- Real IoT device integration via Bluetooth
- Historical data tracking with charts
- Medication reminders
- Multi-patient support
- Cloud data synchronization with Supabase
- Push notifications for critical alerts

## License

MIT
# Chronic-Disease-Management
