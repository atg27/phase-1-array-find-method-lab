superbowlWin = (record) => {
    const seasonOutcome = record.find( record => record.result === 'W');
    return seasonOutcome ? seasonOutcome.year : undefined;
}