import React, { useState } from "react";
import { ScrollView, Skeleton, FlatList } from "native-base";
import { RefreshControl } from "react-native";
import HighlightContent from "./HighlightContent";
import HighlightPost from "./HighlightPost";

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
          initialNumToRender={3}
          renderItem={({ item, index }) => <HighlightPost index={index} />}
          keyExtractor={(item, index) => index}
        />
      </HighlightContent>
    </ScrollView>
  );
}
