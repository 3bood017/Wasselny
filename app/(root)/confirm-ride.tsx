import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RideLayout from '@/components/RideLayout'
import DriverCard from '@/components/DriverCard';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import { useDriverStore } from '@/store';




const ConfirmRide = () => {
  const {drivers, selectedDriver, setSelectedDriver} = useDriverStore();
  return (
    <RideLayout title='choose a driver' snapPoints={['65%', '85%']}>

      <FlatList 
      data={drivers}
      renderItem={({item}) => (
        <DriverCard selected={selectedDriver!} setSelected={() => setSelectedDriver(item.id)!} 
        item={item}/>
      )}
      ListFooterComponent={() => (
        <View className='mx-5 mt-10'> 
        <CustomButton title='Select Ride' onPress={() => router.push("/book-ride")}/>

        </View>
      )}
      />
     
    </RideLayout>
  )
}

export default ConfirmRide