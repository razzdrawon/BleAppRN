# BleAppRN - Lock Smart Lock SDK Development

Development project for creating a React Native SDK that enables third-party apps to integrate Lock Smart Lock functionality via Bluetooth Low Energy (BLE).

---

## 🔓 **NEW: Online Unlock Implementation**

**Branch:** `feature/lock-unlock`

✅ **Sistema completo de Unlock Online implementado para iOS y Android**

Este branch incluye la implementación completa de unlock de candados Lock usando:
- **Plataformas:** iOS (Swift) + Android (Kotlin) - Paridad completa
- BLE (Bluetooth Low Energy) para comunicación directa con candados
- Lock REST API para obtención de comandos encriptados
- Auto-login al entrar al tab + Auto re-login cuando el token expira
- Extracción de MAC address (desde nombre en iOS, desde advertising en Android)
- UI completa con feedback visual en tiempo real
- Auto-cierre del candado (función del firmware)
- Manejo robusto de errores con recuperación automática

📖 **Ver documentación completa:** [`NOKE_ONLINE_UNLOCK.md`](./NOKE_ONLINE_UNLOCK.md)

**Quick Start:**

iOS:
1. Configurar credenciales en `src/config/nokeCredentials.ts`
2. `npm install && cd ios && pod install && cd ..`
3. `npm run ios` (requiere dispositivo iOS físico)

Android:
1. Configurar credenciales en `src/config/nokeCredentials.ts`
2. `npm install`
3. `npm run android` (dispositivo Android o emulador con BLE)

4. Ir al tab "Native" → Escanear → Conectar → Unlock

📋 **Documentación Técnica:**
- [`NOKE_ONLINE_UNLOCK.md`](./NOKE_ONLINE_UNLOCK.md) - Guía completa de funcionalidad
- [`IOS_VS_ANDROID_BLE.md`](./IOS_VS_ANDROID_BLE.md) - Análisis comparativo iOS vs Android
- [`ANDROID_BLE_SOLUTION.md`](./ANDROID_BLE_SOLUTION.md) - Detalles técnicos de Android

---

## 🎯 Project Goals

This project serves as:
1. **Development sandbox** for Lock BLE SDK
2. **Demo application** showing SDK capabilities
3. **Testing environment** for native module integration
4. **Foundation** for two npm packages:
   - `@noke/ble-manager` - Native BLE library (headless)
   - `@noke/ui-components` - Pre-built UI components

## 📱 Current Features

### Multi-Tab Navigation
- **Home Tab**: Production BLE scanning with react-native-ble-manager
- **Native Tab**: Native BLE scanning with custom Turbo Module
- **Settings Tab**: Native module testing and validation

### BLE Functionality
- ✅ Real-time device scanning with live updates
- ✅ Search and filter devices by name/ID
- ✅ Auto-sort by signal strength (RSSI)
- ✅ Continuous scanning mode
- ✅ Device connection management
- ✅ Signal quality indicators

### Native Module Infrastructure
- ✅ Turbo Module support (New Architecture)
- ✅ Legacy Bridge support (Old Architecture)
- ✅ Hybrid code - works with both automatically
- ✅ Event-driven native-to-JS communication

## 🚀 Getting Started

### Prerequisites
- Node.js >= 20
- npm or yarn
- React Native CLI
- Xcode 14+ (for iOS development, macOS only)
- Android Studio (for Android development - future)
- CocoaPods (for iOS dependencies)

### Installation

```bash
# Clone the repository
git clone https://github.com/ricardopadilla-janus/LockApp.git
cd LockApp

# Install dependencies
npm install

# iOS: Install pods
cd ios && pod install && cd ..
```

### Running the App

#### iOS
```bash
npm run ios
# or
npm start  # In one terminal
npm run ios  # In another terminal
```

#### Android (Future)
```bash
npm run android
```

---

## 🏗️ Project Structure

```
LockApp/
├── src/
│   ├── screens/
│   │   ├── Home/              # BLE scanning (react-native-ble-manager)
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── hooks/useBle.ts
│   │   │   ├── components/
│   │   │   └── styles.ts
│   │   ├── NativeScan/        # BLE scanning (native module)
│   │   │   ├── NativeScanScreen.tsx
│   │   │   └── styles.ts
│   │   └── Settings/          # Native module testing
│   │       ├── SettingsScreen.tsx
│   │       └── styles.ts
│   └── services/
│       └── BleService.ts      # BLE implementation facade
├── modules/
│   ├── TestModule/            # Simple native validation module
│   ├── NativeScanner/         # BLE scan-only native module
│   └── LockBleManager/        # Full BLE module (disabled)
├── ios/                       # iOS native code
├── android/                   # Android native code (future)
└── docs/                      # Comprehensive documentation
```

---

## 📚 Documentation

### For Manager/Leadership
- **SDK_OVERVIEW.md** - Product overview and SDK strategy
- **EXECUTIVE_SUMMARY_SHORT.md** - Executive summary (5 min read)
- **QUICK_REFERENCE.md** - Visual reference guide

### Technical Documentation
- **EXECUTIVE_SUMMARY.md** - Complete technical details
- **LIBRARY_DISTRIBUTION_STRATEGY.md** - Package distribution plan
- **ARCHITECTURE_EXPLANATION.md** - Old vs New Architecture explained
- **TURBO_BLE_MODULE_PLAN.md** - Native module implementation plan

### Developer Guides
- **IMPLEMENTATION_SUMMARY.md** - Module implementation details
- **SWITCH_TO_OLD_ARCHITECTURE.md** - Testing in different architectures
- **PR_DESCRIPTION.md** - Pull request details

**Start here**: `SDK_OVERVIEW.md`

---

## 🧩 Native Modules

### TestModule (Active)
Simple native module for infrastructure validation.

**Methods**:
- `getNativeString()` - Returns string from native
- `showAlert(title, message)` - Native iOS alert
- `vibrate()` - Device haptic feedback
- `getDeviceInfo()` - Platform information

**Location**: Settings tab

### NativeScanner (Active)
Native BLE scanning using CoreBluetooth directly.

**Implementation**: Swift (modules/NativeScanner/ios/NativeScanner.swift)

**Methods**:
- `startScan(seconds)` - Start BLE scan
- `stopScan()` - Stop scanning
- `isScanning()` - Check scan status

**Events**:
- `DeviceDiscovered` - Real-time device discovery
- `ScanStopped` - Scan completed
- `BluetoothStateChanged` - BT state updates

**Location**: Native tab

### LockBleManager (Disabled - Future)
Full BLE module with Lock protocol implementation.

**Status**: Structure created, awaiting existing native code import  
**Location**: `modules/LockBleManager/` (preserved but not compiled)

---

## 🔄 Architecture Support

This project supports **both React Native architectures**:

### New Architecture (Current) ✅
- **Active**: `newArchEnabled=true`
- **Uses**: Turbo Modules (JSI)
- **Performance**: Faster (direct native calls)
- **Recommended**: For new projects

### Old Architecture (Compatible) ✅
- **Compatible**: Can switch via config
- **Uses**: Legacy Bridge
- **Performance**: Good (serialized calls)
- **Reason**: Client compatibility

**How to switch**: See `SWITCH_TO_OLD_ARCHITECTURE.md`

---

## 🛠️ Development

### Run Tests
```bash
npm test
```

### Lint Code
```bash
npm run lint
```

### Clean Build
```bash
# iOS
cd ios && rm -rf build Pods Podfile.lock && pod install && cd ..
rm -rf ~/Library/Developer/Xcode/DerivedData/LockApp-*

# Clear Metro cache
watchman watch-del-all
rm -rf $TMPDIR/metro-* $TMPDIR/haste-*

# Rebuild
npm run ios
```

---

## 🧪 Testing the App

### Home Tab (BLE Library)
1. Open app → Home tab
2. Tap "Start Scan"
3. Devices appear with search and sorting
4. Test connection to devices

### Native Tab (Native Module)
1. Open app → Native tab
2. Tap "Start Native Scan"
3. Devices discovered via native code
4. Check Xcode logs for `[NativeScanner]`

### Settings Tab (Module Validation)
1. Open app → Settings tab
2. Test each button:
   - Get Native String
   - Show Native Alert
   - Vibrate Device
   - Get Device Info

---

## 📦 Future: SDK Packages

This project will be extracted into two npm packages:

### @noke/ble-manager
Native BLE module with Lock protocol implementation.

**Installation** (future):
```bash
npm install @noke/ble-manager
cd ios && pod install
```

**Usage**:
```typescript
import LockBLE from '@noke/ble-manager';
await LockBLE.startScan();
await LockBLE.unlock(deviceId);
```

### @noke/ui-components
Pre-built React Native UI components for Lock integration.

**Installation** (future):
```bash
npm install @noke/ble-manager @noke/ui-components
```

**Usage**:
```typescript
import { LockScanScreen } from '@noke/ui-components';
<LockScanScreen />
```

---

## 🔧 Technologies Used

- **React Native**: 0.82 (New Architecture enabled)
- **TypeScript**: 5.8+
- **React Navigation**: Bottom tabs
- **BLE Library**: react-native-ble-manager (current)
- **Native Modules**: Turbo Modules (custom)
- **iOS**: CoreBluetooth framework
- **Build System**: CocoaPods, Codegen

---

## 📋 Roadmap

### Phase 1: Foundation ✅ COMPLETED
- [x] Multi-tab navigation
- [x] BLE scanning with library
- [x] Native module infrastructure
- [x] Turbo Module validation
- [x] Comprehensive documentation

### Phase 2: Native Code Import (In Progress)
- [ ] Import existing Lock native BLE code
- [ ] Replace basic scanning with production code
- [ ] Add connection management
- [ ] Implement Lock protocols

### Phase 3: SDK Extraction
- [ ] Extract to @noke/ble-manager package
- [ ] Extract to @noke/ui-components package
- [ ] Create monorepo structure
- [ ] Publish to npm

### Phase 4: Client Integration
- [ ] Test with third-party apps
- [ ] Support Old + New Architecture
- [ ] Documentation for clients
- [ ] Production deployment

---

## 🤝 Contributing

This is an internal development project. For questions or contributions, contact the development team.

---

## 📞 Support

For technical questions, see the comprehensive documentation in the project root or contact the development team.

---

## 📄 License

This project is licensed for internal development and will be distributed as npm packages for third-party integration.

---

**Status**: Active Development  
**Current Phase**: Native Module Infrastructure  
**Next**: Import existing native BLE code  
**Timeline**: 6-7 weeks to SDK release

