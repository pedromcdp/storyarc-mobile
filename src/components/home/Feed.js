import React, { useState } from "react";
import { ScrollView, Skeleton, FlatList } from "native-base";
import { RefreshControl } from "react-native";
import HighlightContent from "./HighlightContent";

export function Feed() {
  const data = [...Array(10)];
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);
  return (
    <ScrollView
      flex={1}
      bg="#f6f6f6"
      pt={4}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <HighlightContent>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          space={1.5}
          renderItem={({ item }) => (
            <Skeleton
              mr={3}
              h="48"
              w="32"
              borderRadius={10}
              startColor="coolGray.100"
              endColor="coolGray.300"
            />
          )}
          keyExtractor={(item, index) => index}
        />
      </HighlightContent>
    </ScrollView>
  );
}
