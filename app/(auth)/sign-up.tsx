import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '@/components/InputField'; // استيراد InputField المعدل
import { useLanguage } from '@/context/LanguageContext';
import CustomButton from '@/components/CustomButton';

const SignUp = () => {
  const { t, language } = useLanguage();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [gender, setGender] = useState('');
  const [workIndustry, setWorkIndustry] = useState('');
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [showIndustryModal, setShowIndustryModal] = useState(false);

  // حالة لتتبع الحقول الفارغة
  const [errors, setErrors] = useState({
    phoneNumber: false,
    fullName: false,
    email: false,
    password: false,
    gender: false,
    workIndustry: false,
  });

  const genders = t.genders; // الجنس بالعربية
  const industries = t.industries; // المجالات بالعربية

  const handleSignUp = () => {
    // التحقق من الحقول الفارغة
    const newErrors = {
      phoneNumber: !phoneNumber,
      fullName: !fullName,
      email: !email,
      password: !password,
      gender: !gender,
      workIndustry: !workIndustry,
    };

    setErrors(newErrors);

    // التحقق من الموافقة على الشروط
    if (!isAgreed) {
      alert(t.agreeToTermsAlert); // رسالة تنبيه إذا لم يتم الموافقة على الشروط
      return;
    }

    // إذا كان هناك أي حقل فارغ، نوقف التسجيل
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    // إذا كانت جميع الحقول ممتلئة، ننفذ عملية التسجيل
    console.log('Signing up...');
    console.log({
      phoneNumber: `+972${phoneNumber}`, // دمج الكود الدولي مع رقم الهاتف
      fullName,
      email,
      password,
      gender,
      workIndustry,
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* العنوان */}
        <Text className={`text-2xl ${language === 'ar' ? 'font-CairoExtraBold' : 'font-JakartaBold'} text-center mb-7 text-orange-500 `}>{t.signUp}</Text>

        {/* حقل رقم الهاتف */}
        <InputField
          label={t.phoneNumber}
          placeholder="599510287" // النص التوضيحي لرقم الهاتف
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          isPhoneNumber // تفعيل خاصية رقم الهاتف
          labelStyle={language === 'ar' ? 'text-right font-CairoBold' : 'text-left font-JakartaBold'}
          className={`${language === 'ar' ? 'text-right placeholder:text-right font-CairoBold ' : 'text-left placeholder:text-left'}`}
          containerStyle={errors.phoneNumber ? 'border-red-500' : 'border-neutral-100'} // تغيير لون الحدود إذا كان الحقل فارغًا
        />
  
        {/* حقل الاسم الكامل */}
        <InputField
          label={t.fullName}
          placeholder={t.enterYourName}
          value={fullName}
          onChangeText={setFullName}
          labelStyle={language === 'ar' ? 'text-right font-CairoBold' : 'text-left font-JakartaBold'}
          className={`${language === 'ar' ? 'text-right placeholder:text-right font-CairoBold ' : 'text-left placeholder:text-left'}`}
          containerStyle={errors.fullName ? 'border-red-500' : 'border-neutral-100'} // تغيير لون الحدود إذا كان الحقل فارغًا
        />

        {/* حقل البريد الإلكتروني */}
        <InputField
          label={t.email}
          placeholder="user@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          labelStyle={language === 'ar' ? 'text-right font-CairoBold' : 'text-left font-JakartaBold'}
          className={`${language === 'ar' ? 'text-right placeholder:text-right font-CairoBold ' : 'text-left placeholder:text-left'}`}
          containerStyle={errors.email ? 'border-red-500' : 'border-neutral-100'} // تغيير لون الحدود إذا كان الحقل فارغًا
        />

        {/* حقل كلمة السر */}
        <InputField
          label={t.password}
          placeholder="**********"
          value={password}
          onChangeText={setPassword}
          secureTextEntry // تفعيل إظهار/إخفاء كلمة السر
          labelStyle={language === 'ar' ? 'text-right font-CairoBold' : 'text-left font-JakartaBold'}
          className={`${language === 'ar' ? 'text-right placeholder:text-right font-CairoBold ' : 'text-left placeholder:text-left'}`}
          containerStyle={errors.password ? 'border-red-500' : 'border-neutral-100'} // تغيير لون الحدود إذا كان الحقل فارغًا
        />

        {/* اختيار الجنس */}
        <TouchableOpacity
          onPress={() => setShowGenderModal(true)}
          className="my-2"
        >
          <Text className={`text-lg font-JakartaSemiBold mb-3 text-orange-500 ${language === 'ar' ? 'text-right font-CairoBold' : 'text-left font-JakartaBold'}`}>
            {t.gender}
          </Text>
          <View className={`flex flex-row justify-start items-center bg-neutral-100 rounded-full p-4 border ${
            errors.gender ? 'border-red-500' : 'border-orange-200' // تغيير لون الحدود إذا كان الحقل فارغًا
          }`}>
            <Text className={`text-gray-500 ${language === 'ar' ? 'text-right font-CairoBold' : 'text-left font-JakartaBold'}`}>
              {gender || t.selectGender}
            </Text>
          </View>
        </TouchableOpacity>

        {/* اختيار مجال العمل */}
        <TouchableOpacity
          onPress={() => setShowIndustryModal(true)}
          className="my-2"
        >
          <Text className={`text-lg font-JakartaSemiBold mb-3 text-orange-500 ${language === 'ar' ? 'text-right font-CairoBold' : 'text-left font-JakartaBold'}`}>
            {t.workIndustry}
          </Text>
          <View className={`flex flex-row justify-start items-center bg-neutral-100 rounded-full p-4 border ${
            errors.workIndustry ? 'border-red-500' : 'border-orange-200' // تغيير لون الحدود إذا كان الحقل فارغًا
          }`}>
            <Text className={`text-gray-500 ${language === 'ar' ? 'text-right font-CairoBold' : 'text-left font-JakartaBold'}`}>
              {workIndustry || t.selectIndustry}
            </Text>
          </View>
        </TouchableOpacity>

        {/* الموافقة على الشروط */}
        <View className={`flex-row items-center my-4 ${language === 'ar' ? 'flex-row-reverse font-CairoBold' : 'flex-row font-JakartaBold'}`}>
          <TouchableOpacity
            onPress={() => setIsAgreed(!isAgreed)}
            className={`w-5 h-5 border rounded-md mr-2 ${isAgreed ? 'bg-orange-500 border-orange-500' : 'bg-white border-gray-300'}`}
          >
            {isAgreed && <Text className="text-white text-center">✓</Text>}
          </TouchableOpacity>
          <Text className="text-sm text-gray-600">{t.agreeToTerms}</Text>
        </View>

        {/* زر التسجيل */}
        <View className="items-center">
          <CustomButton 
            title={t.signUp}
            onPress={handleSignUp} 
            className="mt-4 bg-orange-500 shadow-none"
          />
        </View>
      </ScrollView>

      {/* نافذة اختيار الجنس */}
      <Modal visible={showGenderModal} transparent animationType="slide">
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="w-11/12 bg-orange-50 rounded-lg p-5 border border-orange-200">
            <Text className={`text-xl font-bold mb-4 text-orange-500 text-center`}>{t.selectGender}</Text>
            {genders.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setGender(item);
                  setShowGenderModal(false);
                }}
                className="py-3 border-b border-orange-100"
              >
                <Text className={`text-lg text-orange-500 ${language === 'ar' ? 'text-right' : 'text-left'}`} >{item}</Text>
              </TouchableOpacity>
            ))}
            <CustomButton 
              title={t.cancel}
              onPress={() => setShowGenderModal(false)}
              className="mt-4 bg-orange-500"
            />
          </View>
        </View>
      </Modal>

      {/* نافذة اختيار مجال العمل */}
      <Modal visible={showIndustryModal} transparent animationType="slide">
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="w-11/12 bg-orange-50 rounded-lg p-5 border border-orange-200">
          <Text className={`text-xl font-bold mb-4 text-orange-500 text-center`}>{t.selectIndustry}</Text>
            {industries.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setWorkIndustry(item);
                  setShowIndustryModal(false);
                }}
                className="py-3 border-b border-orange-100"
              >
                  <Text className={`text-lg text-orange-500 text-center ${language === 'ar' ? 'text-right' : 'text-left'}`} >{item}</Text>
              </TouchableOpacity>
            ))}
            <CustomButton 
              title={t.cancel}
              onPress={() => setShowIndustryModal(false)}
              className="mt-4 bg-orange-500"
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SignUp;